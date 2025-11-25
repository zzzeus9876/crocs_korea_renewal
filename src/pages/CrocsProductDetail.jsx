// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useCrocsProductStore } from '../store/useCrocsProductStore';
// import { wishListStore } from '../store/wishListStore';
// import Title from '../components/Title';
// import WishAddPopup from '../components/WishAddPopup';
// import { useCrocsSizeStore } from '../store/useCrocsSizeStore';
// import { Products } from '../data/CrocsProductsData';

// const CrocsProductDetail = () => {
//     const { id } = useParams();
//     const { crocsItems, onFetchItems } = useCrocsProductStore();
//     const { crocsSizesByCategory, onFetchSize } = useCrocsSizeStore();
//     const { onAddWishList } = wishListStore();
//     const [CrocsProduct, setCrocsProduct] = useState(null);
//     const [selectedSize, setSelectedSize] = useState(null);

//     useEffect(() => {
//         onFetchItems();
//         onFetchSize();
//     }, []);

//     useEffect(() => {
//         if (!id || crocsItems.length === 0) return;

//         const findCrocsItem = crocsItems.find((item) => String(item.id) === String(id));
//         setCrocsProduct(findCrocsItem);
//     }, [id, crocsItems]);

//     if (!CrocsProduct) {
//         return <div>상품 정보를 불러오고 있으니 기다려주세요.</div>;
//     }

//     const normalizeCate = (cate) => {
//         if (!cate) return 'women'; // 기본값

//         const c = cate.split(',')[0].trim().toLowerCase();

//         if (c.includes('men') || c.includes('남성') || c.includes('man')) return 'men';
//         if (c.includes('women') || c.includes('여성') || c.includes('woman')) return 'women';
//         if (c.includes('kid') || c.includes('아동') || c.includes('주니어')) return 'kids';

//         return 'women'; // fallback
//     };

//     // 카테고리 기반 사이즈 찾기
//     const mainCate = normalizeCate(CrocsProduct.cate);

//     console.log('정규화된 mainCate:', mainCate);
//     console.log('sizes store:', crocsSizesByCategory);

//     const categorySizes = crocsSizesByCategory[mainCate] || [];

//     // ⭐ 이미지 타입 관계없이 배열로 통일
//     const images = Array.isArray(CrocsProduct.product_img)
//         ? CrocsProduct.product_img
//         : String(CrocsProduct.product_img)
//               .split(',')
//               .map((v) => v.trim())
//               .filter(Boolean);

//     return (
//         <div className="sub_page">
//             <div className="inner">
//                 <Title title="ProductDetail" />
//                 <div className="product-detail-wrap">
//                     <div className="img_box">
//                         <img src={images[0]} alt={CrocsProduct.product} />
//                     </div>
//                     <div className="detail-info">
//                         {/* 🔥 제품명 */}
//                         <h2 className="detail-title">{CrocsProduct.product}</h2>

//                         {/* 🔥 가격 */}
//                         <p className="detail-price">₩{CrocsProduct.prices?.[0] || '가격 없음'}</p>

//                         {/* 🔥 사이즈 선택 */}
//                         <div className="detail-sizes">
//                             <h3>사이즈</h3>
//                             <div className="size-buttons">
//                                 {categorySizes.map((size) => (
//                                     <button
//                                         key={size}
//                                         className={selectedSize === size ? 'active' : ''}
//                                         onClick={() => setSelectedSize(size)}
//                                     >
//                                         {size}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                         <button onClick={() => onAddWishList(CrocsProduct)}>위시버튼💚</button>
//                         <WishAddPopup />
//                     </div>
//                     {/* detail-info 닫는 태그 */}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default CrocsProductDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCrocsProductStore } from '../store/useCrocsProductStore';
import { wishListStore } from '../store/wishListStore';
import Title from '../components/Title';
import WishAddPopup from '../components/WishAddPopup';
import { useCrocsSizeStore } from '../store/useCrocsSizeStore';
import { Products } from '../data/CrocsProductsData';

const CrocsProductDetail = () => {
    const { id } = useParams();
    const { crocsItems, onFetchItems } = useCrocsProductStore();
    const { crocsSizesByCategory, onFetchSize } = useCrocsSizeStore();
    const { onAddWishList } = wishListStore();
    const [CrocsProduct, setCrocsProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        console.log('📦 데이터 가져오기 시작');
        onFetchItems();
        onFetchSize();
    }, []);

    useEffect(() => {
        console.log('🔍 제품 검색 시작');
        console.log('- URL에서 받은 id:', id, '타입:', typeof id);
        console.log('- crocsItems 길이:', crocsItems.length);

        if (!id || crocsItems.length === 0) {
            console.log('⚠️ id가 없거나 crocsItems가 비어있음');
            return;
        }

        // 🔥 Store의 crocsItems 대신 원본 Products에서 직접 찾기
        const findCrocsItem = Products.find((item) => {
            const match = String(item.id) === String(id);
            if (match) {
                console.log('✅ 매칭 성공! item.id:', item.id, '=== url id:', id);
            }
            return match;
        });

        console.log('🎯 찾은 제품:', findCrocsItem);

        // 🔥 가격 정규화 (Store 로직과 동일하게)
        if (findCrocsItem) {
            const normalizePrice = (price) => {
                if (!price) return null;
                let cleaned = price.replace(/₩/g, '').replace(/,/g, '');
                const number = Number(cleaned);
                return isNaN(number) ? null : number.toLocaleString('ko-KR');
            };

            // prices 배열이 있으면 정규화, 없으면 그대로 사용
            const normalizedProduct = {
                ...findCrocsItem,
                prices: findCrocsItem.prices ? findCrocsItem.prices.map(normalizePrice) : null,
            };

            setCrocsProduct(normalizedProduct);
        }
    }, [id]);

    if (!CrocsProduct) {
        return (
            <div className="sub_page">
                <div className="inner">
                    <div style={{ padding: '50px', textAlign: 'center' }}>
                        <p>상품 정보를 불러오고 있으니 기다려주세요...</p>
                        <p style={{ fontSize: '12px', marginTop: '10px', color: '#999' }}>
                            (콘솔을 확인해주세요)
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const normalizeCate = (cate) => {
        if (!cate) return 'women';

        const c = cate.split(',')[0].trim().toLowerCase();

        if (c.includes('men') || c.includes('남성') || c.includes('man')) return 'men';
        if (c.includes('women') || c.includes('여성') || c.includes('woman')) return 'women';
        if (c.includes('kid') || c.includes('아동') || c.includes('주니어')) return 'kids';

        return 'women';
    };

    const mainCate = normalizeCate(CrocsProduct.cate);
    const categorySizes = crocsSizesByCategory[mainCate] || [];

    const images = Array.isArray(CrocsProduct.product_img)
        ? CrocsProduct.product_img
        : String(CrocsProduct.product_img)
              .split(',')
              .map((v) => v.trim())
              .filter(Boolean);

    return (
        <div className="sub_page">
            <div className="inner">
                <Title title="ProductDetail" />
                <div className="product-detail-wrap">
                    <div className="img_box">
                        <img src={images[0]} alt={CrocsProduct.product} />
                    </div>
                    <div className="detail-info">
                        <h2 className="detail-title">{CrocsProduct.product}</h2>
                        <p className="detail-price">₩{CrocsProduct.prices?.[0] || '가격 없음'}</p>

                        <div className="detail-sizes">
                            <h3>사이즈</h3>
                            <div className="size-buttons">
                                {categorySizes.map((size) => (
                                    <button
                                        key={size}
                                        className={selectedSize === size ? 'active' : ''}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => onAddWishList(CrocsProduct)}>위시버튼💚</button>
                        <WishAddPopup />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrocsProductDetail;
