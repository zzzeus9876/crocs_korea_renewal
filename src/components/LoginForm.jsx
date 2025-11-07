import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <form className="login_form">
            <input type="email" placeholder="ID" required />
            <input type="password" placeholder="PW" required />
            <div className="checkbox_wrap">
                <div className="checkbox_left">
                    <label>
                        <input type="checkbox" />
                        아이디 저장
                    </label>
                </div>
                <div className="checkbox_right">
                    <span>
                        <Link>아이디 찾기</Link>
                    </span>
                    <span> | </span>
                    <span>
                        <Link>비밀번호 찾기</Link>
                    </span>
                </div>
            </div>
            <button className="login_btn">Login</button>
            <button className="join_btn">Join</button>
            <div className="sns_login_wrap">
                <button className="sns_login google">
                    <img src="" alt="" />
                    구글
                </button>
                <button className="sns_login kakao">
                    <img src="" alt="" />
                    카카오
                </button>
                <button className="sns_login naver">
                    <img src="" alt="" />
                    네이버
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
