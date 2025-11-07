import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div className="sub_page">
            <div className="inner">
                <Title title="login" />
                <LoginForm />
                <p>
                    <Link>비회원 주문조회</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
