import React from 'react';
import OrderHistoryCard from '../components/OrderHistoryCard';
<<<<<<< HEAD
// import UserInfoTop from '../components/UserInfoTop';
import { Link, useNavigate } from 'react-router-dom';
=======
import UserInfoTop from '../components/UserInfoTop';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
>>>>>>> ebd2d8f (2025-11-25(화) 초원 - Revert "feat: 상세페이지 지비츠 연결...)
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> f7a4375 (2025-11-25(화) 초원 - v01)
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
import OrderState from '../components/OrderState';
import './scss/orderhistory.scss';

const OrderHistory = () => {
    const navigate = useNavigate();
    return (
        <div className="sub_page">
            <div className="inner">
                {/* <UserInfoTop /> */}
                <div className="user_btn_wrap">
                    <button className="user_home_btn" onClick={() => navigate('/userinfo')}>
                        <img src="" alt="" />
                        <span>마이페이지 홈으로 이동하기</span>
                    </button>
                    {/* 마이 페이지 탭 버튼
                나의 정보 / 주문 정보 / 1:1 문의 /  */}
                    {/* <button>나의 정보</button>
                    <button>주문 정보</button>
                    <button>혜택 정보</button>
                    <button>1 : 1 문의</button> */}
                </div>
                <div className="userinfo_current_order_wrap">
                    <div className="user_menu_top">
                        {/* 주문 처리 현황 */}
                        <h4>주문 처리 현황</h4>
                    </div>
                    <hr />
                    <div className="user_menu_bottom">
                        <OrderState />
                    </div>
                </div>
                <div className="order_history_top">
                    <div className="user_menu_top">
                        {/* 주문 처리 현황 */}
                        <h4>주문 내역</h4>
                    </div>
                    <hr />
                </div>
                <OrderHistoryCard />
            </div>
        </div>
    );
};

export default OrderHistory;
