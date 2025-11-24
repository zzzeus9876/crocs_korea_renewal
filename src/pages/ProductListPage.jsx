import React, { useEffect, useState } from 'react';
import { useCrocsProductStore } from '../store/useCrocsProductStore';
import LeftNavigation from '../components/LeftNavigation';
import ProductCard from '../components/ProductCard';
import './scss/productListpage.scss';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { menuList } from '../store/menuList';
import Title from '../components/Title';

const ProductListPage = () => {
    // ✅ useSearchParams 추가
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search'); // URL에서 검색어 가져오기

    const { onFetchItems, filterByMenu, searchWord, setSearchWord } = useCrocsProductStore();
    const navigate = useNavigate();
    const { cate, subcategory } = useParams();
    const [selectedSize, setSelectedSize] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // 최초 로딩
    useEffect(() => {
        onFetchItems();
    }, []);

    // ✅ URL에서 검색어 읽어서 Store에 설정
    useEffect(() => {
        if (searchQuery) {
            setSearchWord(searchQuery);
        } else {
            // 검색어가 없으면 초기화 (선택사항)
            // setSearchWord('');
        }
    }, [searchQuery, setSearchWord]);

    // cate, subcategory, searchWord가 바뀔 때 페이지 1로 초기화
    useEffect(() => {
        setCurrentPage(1);
    }, [cate, subcategory, searchWord]);

    // --- 카테고리 + 서브카테고리 필터링 ---
    let filteredItems = filterByMenu(cate, subcategory);
    console.log(
        '🔹 cate/subcategory 필터 후:',
        filteredItems.map((item) => item.product)
    );

    // --- 검색어 필터 ---
    if (searchWord) {
        const lower = searchWord.toLowerCase();
        filteredItems = filteredItems.filter(
            (item) =>
                item.product.toLowerCase().includes(lower) ||
                item.tags?.some((tag) => tag.toLowerCase().includes(lower))
        );
        console.log(
            '🔹 검색어 필터 후:',
            filteredItems.map((item) => item.product),
            '검색어:',
            searchWord
        );
    }

    // --- 사이즈 필터링 ---
    if (selectedSize) {
        filteredItems = filteredItems.filter((item) => item.sizes?.includes(selectedSize));
        console.log(
            '🔹 selectedSize 필터 후:',
            filteredItems.map((item) => item.product),
            '선택된 사이즈:',
            selectedSize
        );
    }

    // 페이징 처리
    const itemsPerPage = 12;
    const totalPage = Math.ceil(filteredItems.length / itemsPerPage) || 1;
    const start = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(start, start + itemsPerPage);

    // 페이징 버튼 그룹 단위
    const pageGroupSize = 5;
    const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);
    const groupStart = currentGroup * pageGroupSize + 1;
    const groupEnd = Math.min(groupStart + pageGroupSize - 1, totalPage);

    const pagerButton = [];
    for (let i = groupStart; i <= groupEnd; i++) {
        pagerButton.push(
            <button
                key={i}
                className={currentPage === i ? 'active' : ''}
                onClick={() => handleGoPage(i)}
            >
                {i}
            </button>
        );
    }

    const handleGoPage = (pageNum) => {
        if (pageNum < 1 || pageNum > totalPage) return;
        console.log(pageNum);
        setCurrentPage(pageNum);
    };

    // 해당 카테고리 메뉴 찾기
    const currentMenu = menuList.find((m) => m.key === cate);

    // --- 서브카테고리 리스트 계산 ---
    const subCategoryList = [
        ...new Set(
            filteredItems.flatMap((item) =>
                item.subcategory?.split(',')?.map((sc) => sc.trim().toLowerCase())
            )
        ),
    ];

    // --- 메인 카테고리/서브카테고리 선택 ---
    const mainItem = filteredItems.find((item) => item.cate.toLowerCase() === cate?.toLowerCase());
    const mainCategory = mainItem ? mainItem.cate : cate;
    const mainSubcategory = subcategory || (mainItem?.subcategory?.split(',')[0] ?? null);

    return (
        <div className="sub_page product_list_page">
            <div className="inner">
                <Title title={cate?.toUpperCase()} />

                {/* ✅ 검색어 표시 */}
                {searchWord && (
                    <div className="search_info_wrap">
                        <div className="search_info">
                            {`" ${searchWord} " 검색 결과 : `}
                            <strong>{filteredItems.length}</strong>개
                        </div>
                        <button
                            className="clear_search_info_btn"
                            onClick={() => {
                                setSearchWord('');
                                navigate(cate ? `/${cate}` : '/');
                            }}
                        >
                            ×
                        </button>
                    </div>
                )}

                {/* 타이틀 아래 서브메뉴 */}
                {currentMenu?.submenu_list?.length > 0 && !searchWord && (
                    <div className="sub_menu_wrap">
                        {currentMenu.submenu_list.map((sub) => (
                            <div
                                key={sub.key}
                                className={`btn_menu_item ${
                                    subcategory === sub.key ? 'active' : ''
                                }`}
                                onClick={() => navigate(`/${cate}/${sub.key}`)}
                            >
                                <button className="sub_menu_btn">{sub.label}</button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="product_list_wrap">
                    <div className="list_left">
                        <LeftNavigation
                            category={mainCategory}
                            subcategory={mainSubcategory}
                            subCategoryList={subCategoryList}
                            selectedSize={selectedSize}
                            onSizeSelect={setSelectedSize}
                        />
                    </div>

                    <div className="list_right">
                        {currentItems.length > 0 ? (
                            <>
                                <ul className="product-card__item_list">
                                    {currentItems.map((p) => (
                                        <ProductCard
                                            key={p.id}
                                            product={p}
                                            onClick={() => navigate(`/product/${p.id}`)}
                                            image={p.product_img?.[0] || '/images/default.png'}
                                            onSizeSelect={setSelectedSize}
                                        />
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <div className="empty_state">
                                <p>
                                    {searchWord
                                        ? `"${searchWord}"에 대한 검색 결과가 없습니다.`
                                        : '해당 카테고리에 상품이 없습니다.'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 페이징목록 */}
            {totalPage > 1 && (
                <div className="page_pager">
                    <button onClick={() => handleGoPage(currentPage - 1)}>이전</button>
                    {pagerButton}
                    <button onClick={() => handleGoPage(currentPage + 1)}>다음</button>
                </div>
            )}
        </div>
    );
};

export default ProductListPage;
