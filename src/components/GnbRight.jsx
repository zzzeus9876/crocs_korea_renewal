import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAuthStore } from '../store/loginStore';

const GnbRight = ({ onSearchClick }) => {
    const navigate = useNavigate();
    const { user, handleUserClick, logout } = loginAuthStore();

    return (
        <ul className="gnb_right">
            <li>
                <button onClick={onSearchClick}>
                    <img src="./images/search_icon.svg" alt="search_icon" />
                </button>
            </li>
            <li>
                <button onClick={() => handleUserClick(navigate)}>
                    <img src="./images/user_icon.svg" alt="user_icon" />
                </button>
            </li>
            <li>
                {/* 로그인 상태이면 로그아웃 버튼 표시 */}
                {user && (
                    <button onClick={logout}>
                        <img src="./images/logout_icon.svg" alt="logout_icon" />
                    </button>
                )}
            </li>
            <li>
                <Link to="/cart">
                    <img src="./images/cart_icon.svg" alt="cart_icon" />
                </Link>
            </li>
        </ul>
    );
};

export default GnbRight;
