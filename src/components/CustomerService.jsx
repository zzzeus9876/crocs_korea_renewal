import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import Title from './Title';
import { loginAuthStore } from '../store/loginStore';
import './scss/CustomerService.scss';

function CustomerService({ onClose }) {
    const navigate = useNavigate();
    const { user } = loginAuthStore();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
=======

import './scss/CustomerService.scss';
import Title from './Title';

function CustomerService() {
    const navigate = useNavigate();

>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

<<<<<<< HEAD
    // 입력값 팝업 함수
    const showUserInfoPopup = () => {
        const popupMessage = `
[문의 정보]

이름: ${formData.name || '-'}
전화: ${formData.phone || '-'}
이메일: ${formData.email || '-'}
제목: ${formData.subject || '-'}
        `;
        alert(popupMessage);
    };
=======
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

<<<<<<< HEAD
    // 🔸 문의하기
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            showUserInfoPopup();
            onClose(); // 🔥 모달 닫힘
            navigate('/');
            return;
        }

        // 로그인 O → 기존 검사
=======
    const handleSubmit = (e) => {
        e.preventDefault();

        // 간단한 유효성 검사
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('필수 항목을 모두 입력해주세요.');
            return;
        }

<<<<<<< HEAD
=======
        // 이메일 형식 검사
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('올바른 이메일 형식을 입력해주세요.');
            return;
        }

<<<<<<< HEAD
=======
        // 개인정보 동의 체크 확인
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
        if (!isAgreed) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            return;
        }

<<<<<<< HEAD
        setIsSubmitted(true);

        setTimeout(() => {
            onClose(); // ⭐ 모달 닫기
=======
        // 제출 처리
        console.log('문의 내용:', formData);
        setIsSubmitted(true);

        // 3초 후 /userinfo로 이동
        setTimeout(() => {
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
            navigate('/userinfo');
        }, 3000);
    };

<<<<<<< HEAD
    // 🔸 취소하기
    const handleCancel = () => {
        if (!user) {
            alert('작성 중인 내용이 삭제됩니다. 취소하시겠습니까?');
            onClose(); // 🔥 모달 닫힘
            navigate('/');
            return;
        }

        alert('작성 중인 내용이 삭제됩니다. 취소하시겠습니까?');
        onClose(); // 🔥 모달 닫힘
        navigate('/userinfo');
    };

    // ⭐ 여기서 return 시작해야 함 (중복 중괄호 제거)
    return (
        <div className="cs-container">
            <div className="main-title">
                <Title title="Customer Service" />
            </div>
            <div className="cs-content">
                {/* 왼쪽 안내 영역 */}
=======
    const handleCancel = () => {
        if (window.confirm('작성 중인 내용이 삭제됩니다. 취소하시겠습니까?')) {
            setFormData({
                name: '',
                phone: '',
                email: '',
                subject: '',
                message: '',
            });
            setIsAgreed(false);
        }
    };

    return (
        <div className="cs-container">
            <Title title="Customer Service" />
            <div className="cs-content">
                {/* 왼쪽: 안내 영역 */}
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
                <div className="cs-left">
                    <div className="cs-info-box">
                        <h2 className="info-title">이메일 문의</h2>
                        <p className="info-description">
                            크록스 코리아 고객센터에 오신 것을 환영합니다.
                            <br />
                            문의하신 내용은 영업일 기준 24시간 이내에 답변드립니다.
                        </p>

                        <div className="info-section">
                            <h3 className="section-subtitle">운영 시간</h3>
                            <p className="section-text">
                                평일: 오전 9시 - 오후 6시
                                <br />
                                주말 및 공휴일 휴무
                            </p>
                        </div>

<<<<<<< HEAD
                        {/* <div className="info-section">
=======
                        <div className="info-section">
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
                            <h3 className="section-subtitle">자주 묻는 질문</h3>
                            <ul className="faq-list">
                                <li>배송 관련 문의</li>
                                <li>교환 및 반품 안내</li>
                                <li>제품 사이즈 문의</li>
                                <li>회원 정보 변경</li>
                                <li>적립금 및 쿠폰 사용</li>
                            </ul>
<<<<<<< HEAD
                        </div> */}
=======
                        </div>
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)

                        <div className="info-section">
                            <h3 className="section-subtitle">연락처</h3>
                            <p className="section-text">
                                전화: 1661-0677
                                <br />
                                이메일: support@crocs.co.kr
                            </p>
                        </div>
                    </div>
                </div>

<<<<<<< HEAD
                {/* 오른쪽 폼 영역 */}
=======
                {/* 오른쪽: 문의 폼 */}
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
                <div className="cs-right">
                    {!isSubmitted ? (
                        <form className="cs-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label required">이름</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-input"
                                    placeholder="이름을 입력해주세요"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">연락처</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-input"
                                    placeholder="핸드폰 번호 (선택사항)"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label required">이메일</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="example@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label required">제목</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-input"
                                    placeholder="문의 제목을 입력해주세요"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label required">문의 내용</label>
                                <textarea
                                    name="message"
                                    className="form-textarea"
                                    placeholder="문의하실 내용을 자세히 작성해주세요"
                                    rows="8"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <p className="form-notice">
                                <span className="required-mark">*</span> 필수 입력 항목입니다.
                            </p>

                            <div className="privacy-agreement">
                                <label className="privacy-label">
                                    <input
                                        type="checkbox"
                                        checked={isAgreed}
                                        onChange={(e) => setIsAgreed(e.target.checked)}
                                    />
                                    <span className="privacy-text">
                                        개인정보의 수집 및 이용에 대해 동의합니다.
                                    </span>
                                </label>
                                <div className="privacy-details">
                                    <p className="privacy-item">
                                        <strong>수집항목(필수)</strong>: 이름, 이메일 주소, 문의내용
<<<<<<< HEAD
                                        /<strong> 선택</strong>: 전화 번호
=======
                                        /<strong> 수집항목(선택)</strong>: 전화 번호
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
                                    </p>
                                </div>
                            </div>

                            <div className="button-group">
                                <button type="submit" className="btn-submit">
                                    문의하기
                                </button>
                                <button type="button" className="btn-cancel" onClick={handleCancel}>
                                    취소하기
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="submit-success">
                            <div className="success-icon">✓</div>
                            <h3 className="success-title">문의가 접수되었습니다!</h3>
                            <p className="success-message">
                                빠른 시일 내에 답변드리겠습니다.
                                <br />
<<<<<<< HEAD
=======
                                감사합니다.
                                <br />
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
                                <br />
                                <span className="redirect-notice">
                                    잠시 후 마이페이지로 이동합니다.
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CustomerService;
