import React, { useState, useRef, useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { useCrocsSizeStore } from '../store/useCrocsSizeStore';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './scss/WomenComponents.scss';
import './scss/leftNavigation.scss';

// 이미지 슬라이더
const ProductCardSwiper = ({ images }) => {
    const swiperRef = useRef(null);

    const imgList = Array.isArray(images)
        ? images
        : images
        ? [images] // 문자열 또는 객체라도 배열로 변환됨
        : [];

    useEffect(() => {
        if (!imgList.length) return;

        const swiper = new Swiper(swiperRef.current, {
            modules: [Navigation, Pagination],
            loop: true,
            pagination: { el: '.swiper-pagination', type: 'progressbar' },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });

        return () => swiper.destroy(true, true);
    }, [imgList]);

    return (
        <div className="product-card__img_wrap swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
                {imgList.map((img, i) => (
                    <div className="swiper-slide" key={i}>
                        <img
                            src={typeof img === 'string' ? img : img.src}
                            alt={`상품 이미지 ${i + 1}`}
                            className="product-card__img"
                        />
                    </div>
                ))}
            </div>
            <div className="swiper-button-prev product-card__arrow_left" />
            <div className="swiper-button-next product-card__arrow_right" />
            <div className="swiper-pagination product-card__pagination" />
        </div>
    );
};

// 상품명
const ProductName = ({ name }) => (
    <div className="product-card__name--wrap">
        <p style={{ whiteSpace: 'pre-line' }}>{name}</p>
    </div>
);

// 가격 - prices 배열 사용: [원가, 할인가, 할인율]
const ProductPrice = ({ prices }) => {
    // prices가 없거나 배열이 아니거나, 원가가 없으면 공란
    if (!prices || !Array.isArray(prices) || !prices[0]) {
        return null;
    }

    // prices 배열 구조 분해: [원가, 할인가, 할인율]
    const [originalPrice, discountPrice, discountRate] = prices;

    // 할인 여부 확인
    const hasDiscount = discountPrice !== null && discountPrice !== undefined;

    return (
        <div className="product-card__price_wrap">
            {hasDiscount ? (
                <>
                    {/* 할인가 */}
                    <div className="discount-price">
                        {discountPrice}
                        {discountRate && discountRate !== 'undefined' && ` (${discountRate} 할인)`}
                    </div>
                    {/* 원가 (취소선) */}
                    <div className="original-price" style={{ textDecoration: 'line-through' }}>
                        {originalPrice}
                    </div>
                </>
            ) : (
                <>
                    {/* 정상가 */}
                    <div className="original-price">{originalPrice}</div>
                </>
            )}
        </div>
    );
};

// 색상 선택
// const ProductColorBadges = ({ colors = [], onColorClick }) => (
//     <div className="product-card__color">
//         <div className="product-card__color__title--wrap">
//             <p>색상</p>
//         </div>
//         <div className="color-badge__wrap">
//             {colors.map((color, i) => (
//                 <button
//                     key={i}
//                     className={`color-badge color-badge--${color}`}
//                     onClick={() => onColorClick?.(color)}
//                     type="button"
//                 />
//             ))}
//         </div>
//     </div>
// );
// const ProductColorBadges = ({ colors, onColorClick }) => {
//     // 배열이 아닌 경우 빈 배열 또는 단일 값 배열로 변환
//     const colorList = Array.isArray(colors) ? colors : colors ? [colors] : [];

//     return (
//         <div className="product-card__color">
//             <div className="product-card__color__title--wrap">
//                 <p>색상</p>
//             </div>
//             <div className="color-badge__wrap">
//                 {colorList.map((color, i) => (
//                     <button
//                         key={i}
//                         className={`color-badge color-badge--${color}`}
//                         onClick={() => onColorClick?.(color)}
//                         type="button"
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

const normalizeColor = (c) => {
    if (!c) return null;

    // 이미 rgb() 형태면 그대로 반환
    if (c.startsWith('rgb')) return c;

    // 숫자만 있는 경우 → rgb() 생성
    if (c.match(/^\d+\s*,/)) {
        return `rgb(${c})`;
    }

    // hex 값일 경우 그대로 사용
    if (c.startsWith('#')) return c;

    return null;
};

const ProductColorBadges = ({ colors = [], onColorClick }) => {
    // colors가 배열이 아니면 배열로 변환
    const colorList = Array.isArray(colors) ? colors : [colors];

    // 컬러 정규화 + null 제거
    const normalized = colorList.map((c) => normalizeColor(c)).filter(Boolean);

    return (
        <div className="product-card__color">
            <div className="product-card__color__title--wrap">
                <p>색상</p>
            </div>

            <div className="color-badge__wrap">
                {normalized.map((color, i) => (
                    <button
                        key={i}
                        className="color-badge"
                        style={{ background: color }}
                        onClick={() => onColorClick?.(color)}
                    />
                ))}
            </div>
        </div>
    );
};

// 사이즈 선택
// const ProductSizeButtons = ({ category, soldOutSizes = [], onSizeSelect }) => {
//     const [active, setActive] = useState(null);

//     const { crocsSizesByCategory, onFetchSize } = useCrocsSizeStore();

//     useEffect(() => {
//         if (!crocsSizesByCategory || Object.keys(crocsSizesByCategory).length === 0) {
//             onFetchSize(); // store 초기화
//         }
//     }, [crocsSizesByCategory, onFetchSize]);

//     // 카테고리 id 매칭
//     let categoryId = null;
//     if (category?.includes('키즈')) categoryId = 'kids';
//     else if (category?.includes('여성')) categoryId = 'women';
//     else if (category?.includes('남성')) categoryId = 'men';

//     // 해당 카테고리 사이즈 가져오기
//     const sizes = crocsSizesByCategory[categoryId] || [];

//     return (
//         <div className="product-card__size">
//             <div className="product-card__size__title--wrap">
//                 <p>사이즈</p>
//             </div>
//             <ul className="product-card__size--btns__wrap">
//                 {sizes.map((size) => {
//                     const soldOut = soldOutSizes.includes(size);
//                     const isActive = active === size;

//                     return (
//                         <li key={size} className="size--btns__item">
//                             <button
//                                 className={`size--btns__button ${isActive ? 'active' : ''} ${
//                                     soldOut ? 'sold-out' : ''
//                                 }`}
//                                 onClick={() => !soldOut && (setActive(size), onSizeSelect?.(size))}
//                                 disabled={soldOut}
//                             >
//                                 {size}
//                             </button>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };
const ProductSizeButtons = ({ category, soldOutSizes = [], onSizeSelect }) => {
    const [active, setActive] = useState(null);
    const { crocsSizesByCategory, onFetchSize } = useCrocsSizeStore();

    // useEffect(() => {
    //     onFetchSize(); // 초기 렌더링 시 한 번만 호출
    // }, [onFetchSize]);

    useEffect(() => {
        if (!crocsSizesByCategory || Object.keys(crocsSizesByCategory).length === 0) {
            onFetchSize(); // store 초기화
        }
    }, [crocsSizesByCategory, onFetchSize]);

    const categoryMap = { 키즈: 'kids', 여성: 'women', 남성: 'men' };
    const categoryId = categoryMap[category] || null;

    const sizes = crocsSizesByCategory[categoryId] || [];

    return (
        <div className="product-card__size">
            <div className="product-card__size__title--wrap">
                <p>사이즈</p>
            </div>
            <ul className="product-card__size--btns__wrap">
                {sizes.map((size) => {
                    const soldOut = soldOutSizes.includes(size);
                    const isActive = active === size;

                    return (
                        <li key={size} className="size--btns__item">
                            <button
                                className={`size--btns__button ${isActive ? 'active' : ''} ${
                                    soldOut ? 'sold-out' : ''
                                }`}
                                onClick={() => {
                                    if (!soldOut) {
                                        setActive(size);
                                        onSizeSelect?.(size);
                                    }
                                }}
                                disabled={soldOut}
                            >
                                {size}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

// 상품 카드
const ProductCard = ({ product, onClick }) => (
    <li className="product-card" onClick={onClick}>
        <ProductCardSwiper images={product.product_img || []} />
        <ProductName name={product.product} />
        <ProductPrice prices={product.prices} />
        <ProductColorBadges
            colors={product.color || []}
            onColorClick={(c) => console.log('색상 선택:', c)}
        />
        <ProductSizeButtons
            category={product.category} // 예: "여성", "남성", "키즈"
            soldOutSizes={product.soldOutSizes || []}
            onSizeSelect={(s) => console.log('사이즈 선택:', s)}
        />
    </li>
);

export default ProductCard;
