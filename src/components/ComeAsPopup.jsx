import React from 'react';
import { Link } from 'react-router-dom';
import './scss/comeAsPopup.scss';

const ComeAsPopup = () => {
    return (
        <>
            <div className="come_as_popup_wrap">
                <div className="come_as_wrap">
                    <div className="img_box">
                        <img src="./images/14_베이_라인드_클로그_2.jpg" alt="크록스꾸미기" />
                    </div>
                    <div className="text_box">
                        <h3 className="come_as_title">Come As You Are</h3>
                        <p>
                            당신만의 취향을 가득 담은 <br />
                            하나뿐인 크록스를 만들어 보세요.
                        </p>
                    </div>
                    <button>크록스 꾸미기</button>
                    <Link>크록스 꾸미기</Link>
                </div>
            </div>
        </>
    );
};

export default ComeAsPopup;
