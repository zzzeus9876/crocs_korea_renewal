import React, { useEffect, useState } from 'react';
import JibbitzCollaboSwiper from '../components/JibbitzCollaboSwiper';
import MainSlider from '../components/MainSlider';
import TopPopup from '../components/TopPopup';
import Monthly from '../components/Monthly';
import MainCategory from '../components/MainCategory';
import MainInstagram from '../components/MainInstagram';
import SlideCircle from '../components/SlideCircle';
import CrocsSection from '../components/CrocsSectionFinal';
import ComeAsPopupBtn from '../components/ComeAsPopupBtn';
import ComeAsPopup from '../components/ComeAsPopup';

const Main = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(true); // 페이지 진입 시 모달 노출
    const [isBtnVisible, setIsBtnVisible] = useState(false); // 모달 닫으면 버튼 표시
    const [showBtn, setShowBtn] = useState(false); // 배너 아래에서만 버튼 표시

    useEffect(() => {
        const handleScroll = () => {
            const bannerHeight = document.querySelector('.main_slider')?.offsetHeight || 0;
            if (window.scrollY > bannerHeight) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setIsBtnVisible(true);
    };

    return (
        <main>
            <MainSlider />
            <TopPopup />
            <div className="container">
                <MainCategory />
                <SlideCircle />
                <JibbitzCollaboSwiper />
                <CrocsSection />
                <Monthly />
                <MainInstagram />
            </div>
            {/* 팝업창 */}
            {isPopupOpen && <ComeAsPopup onClose={handleClosePopup} />}
            {isBtnVisible && showBtn && <ComeAsPopupBtn onOpen={() => setIsPopupOpen(true)} />}
        </main>
    );
};

export default Main;
