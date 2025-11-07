import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import './scss/login.scss';

const Login = () => {
    return (
        <div className="sub_page">
            <div className="inner">
                <div className="login_wrap">
                    <Title title="login" />
                    <LoginForm />
                    <p>
                        <Link>비회원 주문조회</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
