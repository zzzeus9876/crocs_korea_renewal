<<<<<<< HEAD
import React from 'react';
import { useRecentProductsStore } from '../store/recentProductsStore';
import './scss/RecentProducts.scss';
=======
import React from "react";
import { useRecentProductsStore } from "../store/recentProductsStore";
import "./scss/RecentProducts.scss";
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)

const RecentProducts = () => {
    const { recentProducts, removeProduct, clearAll } = useRecentProductsStore();

    const formatPrice = (price, discountPrice) => {
<<<<<<< HEAD
        return new Intl.NumberFormat('ko-KR').format(price);
=======
        return new Intl.NumberFormat("ko-KR").format(price);
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
    };

    const formatDate = (date) => {
        const now = new Date();
        const viewed = new Date(date);
        const diffMs = now - viewed;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

<<<<<<< HEAD
        if (diffMins < 1) return '방금 전';
        if (diffMins < 60) return `${diffMins}분 전`;
        if (diffHours < 24) return `${diffHours}시간 전`;
        if (diffDays < 7) return `${diffDays}일 전`;
        return viewed.toLocaleDateString('ko-KR');
=======
        if (diffMins < 1) return "방금 전";
        if (diffMins < 60) return `${diffMins}분 전`;
        if (diffHours < 24) return `${diffHours}시간 전`;
        if (diffDays < 7) return `${diffDays}일 전`;
        return viewed.toLocaleDateString("ko-KR");
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
    };

    if (recentProducts.length === 0) {
        return (
<<<<<<< HEAD
            <div className="recent-products">
                <div className="recent-products__header">
                    <h1>최근 본 상품</h1>
                </div>
                <div className="recent-products__empty">
                    <div className="empty-icon">👀</div>
=======
            <div className='recent-products'>
                <div className='recent-products__header'>
                    <h1>최근 본 상품</h1>
                </div>
                <div className='recent-products__empty'>
                    <div className='empty-icon'>👀</div>
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                    <p>최근 본 상품이 없습니다</p>
                </div>
            </div>
        );
    }

    return (
<<<<<<< HEAD
        <div className="recent-products">
            <div className="recent-products__header">
                <h1>최근 본 상품</h1>
                <div className="header-info">
                    <span className="count">{recentProducts.length}개</span>
                    <button className="clear-btn" onClick={clearAll}>
=======
        <div className='recent-products'>
            <div className='recent-products__header'>
                <h1>최근 본 상품</h1>
                <div className='header-info'>
                    <span className='count'>{recentProducts.length}개</span>
                    <button className='clear-btn' onClick={clearAll}>
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                        전체 삭제
                    </button>
                </div>
            </div>

<<<<<<< HEAD
            <div className="recent-products__list">
                {recentProducts.map((item) => (
                    <div key={item.id} className="product-item">
                        <div className="product-meta">
                            <span className="viewed-time">{formatDate(item.viewedAt)}</span>
=======
            <div className='recent-products__list'>
                {recentProducts.map((item) => (
                    <div key={item.id} className='product-item'>
                        <div className='product-meta'>
                            <span className='viewed-time'>{formatDate(item.viewedAt)}</span>
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                            {/* 리뷰별점표시 */}
                            {/* {item.rating && (
                                <span className='rating'>
                                    ⭐ {item.rating} ({item.reviewCount})
                                </span>
                            )} */}
                        </div>
<<<<<<< HEAD
                        <div className="product_imgbox">
                            <img src={item.image} alt={item.name} />
                        </div>

                        <div className="product_textbox">
                            <h3 className="product-name">{item.name}</h3>
                            <p className="product-category">{item.category}</p>
                            <div className="product-price-wrap">
                                <span className="price-text">
                                    {item.discountPrice == '' ? item.price : item.discountPrice}
                                </span>
                                <span className="price-text">
                                    {item.discountPrice == '' ? '' : item.originPrice}
                                </span>
                                {/* <span className='price-text'>{formatPrice(item.price)}원</span>
                                <span className='price-text'>{item.price}</span> */}
                                {item.discount && (
                                    <span className="discount">{item.discount}%</span>
=======
                        <div className='product_imgbox'>
                            <img src={item.image} alt={item.name} />
                        </div>

                        <div className='product_textbox'>
                            <h3 className='product-name'>{item.name}</h3>
                            <p className='product-category'>{item.category}</p>
                            <div className='product-price-wrap'>
                                <span className='price-text'>
                                    {item.discountPrice == "" ? item.price : item.discountPrice}
                                </span >
                                <span className='price-text'>{item.discountPrice == "" ? "" : item.originPrice}</span>
                                {/* <span className='price-text'>{formatPrice(item.price)}원</span>
                                <span className='price-text'>{item.price}</span> */}
                                {item.discount && (
                                    <span className='discount'>{item.discount}%</span>
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                                )}
                            </div>
                        </div>

<<<<<<< HEAD
                        <div className="product-actions">
=======
                        <div className='product-actions'>
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                            {/* <button 
                className="remove-btn"
                onClick={() => removeProduct(product.id)}
                aria-label="삭제"
              >
                ✕
              </button> */}
                            {/* <button className="cart-btn">장바구니</button> */}
                            {/* <button className="buy-btn">구매하기</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProducts;
