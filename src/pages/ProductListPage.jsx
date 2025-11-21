// import React, { useEffect, useState } from 'react';
// import { useCrocsProductStore } from '../store/useCrocsProductStore';
// import LeftNavigation from '../components/LeftNavigation';
// import ProductCard from '../components/ProductCard';
// import './scss/productListpage.scss';
// import { useParams } from 'react-router-dom';
// import Title from '../components/Title';

// const ProductListPage = () => {
//     const { onFetchItems, onItemsCategory, searchWord } = useCrocsProductStore();
//     const { cate } = useParams(); // URL에서 cate 가져오기

//     // 🔥 페이지 title(=cate)에 맞춰 필터링
//     useEffect(() => {
//         onFetchItems();
//     }, []);

//     // 🔥 cate 또는 searchWord가 변경되면 페이지를 1로 리셋
//     useEffect(() => {
//         setCurrentPage(1);
//     }, [cate, searchWord]);

//     // 🔥 cate에 맞춰 자동 필터링
//     let filteredItems = onItemsCategory(cate);

//     // 🔥 검색 필터
//     if (searchWord) {
//         const lower = searchWord.toLowerCase();
//         filteredItems = filteredItems.filter((item) => item.product.toLowerCase().includes(lower));
//     }

//     // 페이징
//     const itemsPerPage = 12;
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalPage = Math.ceil(filteredItems.length / itemsPerPage) || 1;
//     const start = (currentPage - 1) * itemsPerPage;
//     const currentItems = filteredItems.slice(start, start + itemsPerPage);

//     return (
//         <div className="sub_page">
//             <div className="inner">
//                 {/* 🔥 페이지 제목 */}
//                 <Title title={cate?.toUpperCase()} />
//                 <div className="product_list_wrap">
//                     <div className="list_left">
//                         <LeftNavigation />
//                     </div>
//                     <div className="list_right">
//                         {currentItems.length > 0 ? (
//                             <>
//                                 <ul className="product-card__item_list">
//                                     {currentItems.map((p) => (
//                                         <ProductCard key={p.id} product={p} />
//                                     ))}
//                                 </ul>

//                                 {/* Pager */}
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
    const { cate } = useParams(); // URL에서 cate 가져오기

    // 상품 이미지를 클릭하면 상세페이지로 이동하기
    const handleMoveDetail = (id) => {
        navigate(`/product/${id}`);
    };

    // 최초 로딩
    useEffect(() => {
        onFetchItems();
    }, []);

    // cate나 searchWord가 바뀔 때마다 페이지를 1로 초기화
    useEffect(() => {
        setCurrentPage(1);
    }, [cate, searchWord]);

    // 🔥 cate 기반 필터링 (women / men / kids / clog / fuzz / collabo 등)
    let filteredItems = filterByMenu(cate);

    // 🔥 검색 필터
    if (searchWord) {
        const lower = searchWord.toLowerCase();
        filteredItems = filteredItems.filter((item) => item.product.toLowerCase().includes(lower));
    }

    // --- 페이징 처리 ---
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(filteredItems.length / itemsPerPage) || 1;
    const start = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(start, start + itemsPerPage);

    return (
        <div className="sub_page">
            <div className="inner">
                {/* 🔥 페이지 제목 자동 처리 */}
                <Title title={cate?.toUpperCase()} />

                <div className="product_list_wrap">
                    <div className="list_left">
                        <LeftNavigation />
                    </div>

                    <div className="list_right">
                        {currentItems.length > 0 ? (
                            <>
                                <ul className="product-card__item_list">
                                    {currentItems.map((p) => (
                                        <ProductCard
                                            key={p.id}
                                            product={p}
                                            onClick={() => handleMoveDetail(p.id)}
                                        />
                                    ))}
                                </ul>

                                {/* Pager */}
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
