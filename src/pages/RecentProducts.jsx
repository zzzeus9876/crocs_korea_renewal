import React, { useState } from "react";
import { useRecentProductsStore } from "../store/recentProductsStore";
import "./scss/RecentProducts.scss";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

const RecentProducts = () => {
  const { recentProducts, clearAll } = useRecentProductsStore();
  const navigate = useNavigate();

  // 페이징 처리
  const itemPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(recentProducts.length / itemPerPage);
  const start = (currentPage - 1) * itemPerPage;
  const currentItems = recentProducts.slice(start, start + itemPerPage);

  const handleGoPage = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPage) return;
    setCurrentPage(pageNum);
  };

  const pagerButton = () => {
    const buttons = [];
    for (let i = 1; i <= totalPage; i++) {
      buttons.push(
        <button
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handleGoPage(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const formatDate = (date) => {
    const now = new Date();
    const viewed = new Date(date);
    const diffMs = now - viewed;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "방금 전";
    if (diffMins < 60) return `${diffMins}분 전`;
    if (diffHours < 24) return `${diffHours}시간 전`;
    if (diffDays < 7) return `${diffDays}일 전`;
    return viewed.toLocaleDateString("ko-KR");
  };

  if (recentProducts.length === 0) {
    return (
      <div className="recent_inner">
        <div className="recent_empty">
          <div className="empty-icon">👀</div>
          <p>최근 본 상품이 없습니다</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sub_page wishlist_page">
      <div className="inner">
        <Title title="Recent Product" />
        <div className="recent_inner">
          <div className="recent_header">
            {" "}
            {/* 새로 추가 */}
            <button className="recent_clear_btn" onClick={() => clearAll()}>
              전체 삭제
            </button>
          </div>
          <div className="recent_card_wrap">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="recent_card"
                onClick={() => navigate(item.link)}
                style={{ cursor: "pointer" }}
              >
                <div className="recent_card_imgbox">
                  <img src={item.image} alt={item.name} />
                  <span className="viewed-time">
                    {formatDate(item.viewedAt)}
                  </span>
                </div>
                <div className="recent_card_textbox">
                  <p>{item.name}</p>
                  <div className="recent_card_price">
                    <p>
                      <span>
                        {item.discountPrice === ""
                          ? item.price
                          : item.discountPrice}
                      </span>
                      <span>
                        {item.discountPrice === "" ? "" : item.originPrice}
                      </span>
                    </p>
                    <p className="price_bottom">{item.discount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPage > 1 && (
            <div className="pager_btn">
              <button onClick={() => handleGoPage(currentPage - 1)}>
                이전
              </button>
              {pagerButton()}
              <button onClick={() => handleGoPage(currentPage + 1)}>
                다음
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentProducts;
