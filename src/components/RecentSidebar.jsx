<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useRecentProductsStore } from '../store/recentProductsStore';
import Title from '../components/Title';
import './scss/RecentSidebar.scss';

const RecentSidebar = ({ isOpen, onClose }) => {
    const { recentProducts, removeProduct, clearAll } = useRecentProductsStore();

    const formatPrice = (price, discountPrice) => {
        return new Intl.NumberFormat('ko-KR').format(price);
=======
import React, { useEffect } from "react";
import { useRecentProductsStore } from "../store/recentProductsStore";
import Title from "../components/Title";
import "./scss/RecentSidebar.scss";

const RecentSidebar = ({isOpen, onClose}) => {
    const { recentProducts, removeProduct, clearAll } = useRecentProductsStore();

    const formatPrice = (price, discountPrice) => {
        return new Intl.NumberFormat("ko-KR").format(price);
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
    };

    // ESC 키로 닫기
    useEffect(() => {
        const handleEsc = (e) => {
<<<<<<< HEAD
            if (e.key === 'Escape' && onClose) {
=======
            if (e.key === "Escape" && onClose) {
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                onClose();
            }
        };

        if (isOpen) {
<<<<<<< HEAD
            document.addEventListener('keydown', handleEsc);
            // 배경 스크롤 방지
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
=======
            document.addEventListener("keydown", handleEsc);
            // 배경 스크롤 방지
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
        };
    }, [isOpen, onClose]);

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

    return (
        <>
            {/* 배경 오버레이 */}
<<<<<<< HEAD
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

            <div className={`recent-side-container ${isOpen ? 'open' : ''}`}>
                <div className="recent-inner">
                    <div className="recent-side-products-wrap">
                        <div className="recent-side-product">
                            <Title title="최근 본 상품" />
                            <button className="close-btn" onClick={onClose}>
                                ✕
                            </button>
                            {recentProducts.length > 0 && (
                                <div className="header-info">
                                    <span className="count">{recentProducts.length}개</span>
                                    <button className="clear-btn" onClick={clearAll}>
=======
            {isOpen && <div className='sidebar-overlay' onClick={onClose} />}

            <div className={`recent-side-container ${isOpen ? "open" : ""}`}>
                <div className='recent-inner'>
                    <div className='recent-side-products'>
                        <div className='recent-side-products__header'>
                            <Title title='최근 본 상품' />
                            <button className='close-btn' onClick={onClose}>
                                ✕
                            </button>
                            {recentProducts.length > 0 && (
                                <div className='header-info'>
                                    <span className='count'>{recentProducts.length}개</span>
                                    <button className='clear-btn' onClick={clearAll}>
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                                        전체 삭제
                                    </button>
                                </div>
                            )}
                        </div>

                        {recentProducts.length == 0 ? (
<<<<<<< HEAD
                            <div className="recent-side-products__empty">
                                <div className="empty-icon">👀</div>
                                <p>최근 본 상품이 없습니다</p>
                            </div>
                        ) : (
                            <div className="recent-side-products__list">
                                {recentProducts.map((item) => (
                                    <div key={item.id} className="product-item">
                                        <div className="product-meta">
                                            <span className="viewed-time">
=======
                            <div className='recent-side-products__empty'>
                                <div className='empty-icon'>👀</div>
                                <p>최근 본 상품이 없습니다</p>
                            </div>
                        ) : (
                            <div className='recent-side-products__list'>
                                {recentProducts.map((item) => (
                                    <div key={item.id} className='product-item'>
                                        <div className='product-meta'>
                                            <span className='viewed-time'>
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                                                {formatDate(item.viewedAt)}
                                            </span>
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
                                            {/* <p className='product-category'>{item.category}</p> */}
                                            <div className="product-price-wrap">
                                                <span className="price-text">
                                                    {item.discountPrice == ''
                                                        ? item.price
                                                        : item.discountPrice}
                                                </span>
                                                <span className="price-text">
                                                    {item.discountPrice == ''
                                                        ? ''
=======
                                        <div className='product_imgbox'>
                                            <img src={item.image} alt={item.name} />
                                        </div>

                                        <div className='product_textbox'>
                                            <h3 className='product-name'>{item.name}</h3>
                                            <p className='product-category'>{item.category}</p>
                                            <div className='product-price-wrap'>
                                                <span className='price-text'>
                                                    {item.discountPrice == ""
                                                        ? item.price
                                                        : item.discountPrice}
                                                </span>
                                                <span className='price-text'>
                                                    {item.discountPrice == ""
                                                        ? ""
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                                                        : item.originPrice}
                                                </span>
                                                {/* <span className='price-text'>{formatPrice(item.price)}원</span>
                                <span className='price-text'>{item.price}</span> */}
                                                {item.discount && (
<<<<<<< HEAD
                                                    <span className="discount">
=======
                                                    <span className='discount'>
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                                                        {item.discount}%
                                                    </span>
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
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentSidebar;
