// import React, { useEffect, useState } from 'react';
// import { useCrocsProductStore } from '../store/useCrocsProductStore';
// import LeftNavigation from '../components/LeftNavigation';
// import ProductCard from '../components/ProductCard';
// import './scss/productListpage.scss';
// import { useNavigate, useParams } from 'react-router-dom';
// import Title from '../components/Title';

// const ProductListPage = () => {
//     const { onFetchItems, filterByMenu, searchWord } = useCrocsProductStore();
//     const navigate = useNavigate();
//     const { cate, subcategory } = useParams(); // URL에서 cate, subcate 가져오기

//     const [currentPage, setCurrentPage] = useState(1);

//     // 최초 로딩
//     useEffect(() => {
//         onFetchItems();
//     }, []);

//     // cate나 searchWord가 바뀔 때마다 페이지를 1로 초기화
//     useEffect(() => {
//         setCurrentPage(1);
//     }, [cate, subcategory, searchWord]);

//     // 🔥 cate 기반 필터링
//     let filteredItems = filterByMenu(cate, subcategory);

//     // 🔥 subcategory 필터링
//     const subCategoryList = [
//         ...new Set(
//             filteredItems.flatMap((item) =>
//                 item.subcategory?.split(',')?.map((sc) => sc.trim().toLowerCase())
//             )
//         ),
//     ];

//     // 🔥 검색 필터
//     if (searchWord) {
//         const lower = searchWord.toLowerCase();
//         filteredItems = filteredItems.filter((item) => item.product.toLowerCase().includes(lower));
//     }

//     // --- 페이징 처리 ---
//     const itemsPerPage = 12;
//     const totalPage = Math.ceil(filteredItems.length / itemsPerPage) || 1;
//     const start = (currentPage - 1) * itemsPerPage;
//     const currentItems = filteredItems.slice(start, start + itemsPerPage);

//     // --- 메인 카테고리 선택 ---
//     // URL의 cate와 상품의 cate가 일치하는 첫 번째 상품의 cate를 메인으로 선택
//     const mainItem = filteredItems.find((item) => item.cate === cate);

//     return (
//         <div className="sub_page">
//             <div className="inner">
//                 <Title title={cate?.toUpperCase()} />

//                 <div className="product_list_wrap">
//                     <div className="list_left">
//                         <LeftNavigation
//                             category={cate}
//                             subcategory={subcategory}
//                             subCategoryList={subCategoryList}
//                         />
//                     </div>

//                     <div className="list_right">
//                         {currentItems.length > 0 ? (
//                             <>
//                                 <ul className="product-card__item_list">
//                                     {currentItems.map((p) => (
//                                         <ProductCard
//                                             key={p.id}
//                                             product={p}
//                                             onClick={() => navigate(`/product/${p.id}`)}
//                                         />
//                                     ))}
//                                 </ul>

//                                 <div className="pager">
//                                     <button
//                                         onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                                     >
//                                         이전
//                                     </button>
//                                     <span>
//                                         {currentPage} / {totalPage}
//                                     </span>
//                                     <button
//                                         onClick={() =>
//                                             setCurrentPage((p) => Math.min(totalPage, p + 1))
//                                         }
//                                     >
//                                         다음
//                                     </button>
//                                 </div>
//                             </>
//                         ) : (
//                             <div className="empty_state">
//                                 <p>해당 카테고리에 상품이 없습니다.</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductListPage;

import React, { useEffect, useState } from 'react';
import { useCrocsProductStore } from '../store/useCrocsProductStore';
import LeftNavigation from '../components/LeftNavigation';
import ProductCard from '../components/ProductCard';
import './scss/productListpage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../components/Title';

const ProductListPage = () => {
    const { onFetchItems, filterByMenu, searchWord } = useCrocsProductStore();
    const navigate = useNavigate();
    const { cate, subcategory } = useParams(); // URL에서 cate, subcategory 가져오기

    const [currentPage, setCurrentPage] = useState(1);

    // 최초 로딩
    useEffect(() => {
        onFetchItems();
    }, []);

    // cate, subcategory, searchWord가 바뀔 때 페이지 1로 초기화
    useEffect(() => {
        setCurrentPage(1);
    }, [cate, subcategory, searchWord]);

    // --- 카테 + 서브카테 필터링 ---
    let filteredItems = filterByMenu(cate, subcategory);

    // --- 검색어 필터 ---
    if (searchWord) {
        const lower = searchWord.toLowerCase();
        filteredItems = filteredItems.filter((item) => item.product.toLowerCase().includes(lower));
    }

    // --- 페이징 처리 ---
    const itemsPerPage = 12;
    const totalPage = Math.ceil(filteredItems.length / itemsPerPage) || 1;
    const start = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(start, start + itemsPerPage);

    // --- 서브카테고리 리스트 계산 ---
    const subCategoryList = [
        ...new Set(
            filteredItems.flatMap((item) =>
                item.subcategory?.split(',')?.map((sc) => sc.trim().toLowerCase())
            )
        ),
    ];

    // --- 메인 카테/서브카테 선택 ---
    const mainItem = filteredItems.find((item) => item.cate.toLowerCase() === cate.toLowerCase());
    const mainCategory = mainItem ? mainItem.cate : cate;
    const mainSubcategory = subcategory || (mainItem?.subcategory?.split(',')[0] ?? null);

    return (
        <div className="sub_page">
            <div className="inner">
                <Title title={cate?.toUpperCase()} />

                <div className="product_list_wrap">
                    <div className="list_left">
                        <LeftNavigation
                            category={mainCategory}
                            subcategory={mainSubcategory}
                            subCategoryList={subCategoryList}
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
                                            // 🔥 이미지 경로 확인
                                            image={p.product_img?.[0] || '/images/default.png'}
                                        />
                                    ))}
                                </ul>

                                <div className="pager">
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    >
                                        이전
                                    </button>
                                    <span>
                                        {currentPage} / {totalPage}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setCurrentPage((p) => Math.min(totalPage, p + 1))
                                        }
                                    >
                                        다음
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="empty_state">
                                <p>해당 카테고리에 상품이 없습니다.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;
