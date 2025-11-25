import React from 'react';
import FooterTitle from './FooterTitle';
import FooterContents from './FooterContents';
import FooterBottom from './FooterBottom';
import './scss/Footer.scss';

const Footer = ({ onOpenCS }) => {
    return (
        <footer>
<<<<<<< HEAD
            <div className="footer_top">
                <FooterTitle />
                <FooterContents />
            </div>

=======
            <FooterTitle />
            <FooterContents />
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
            <FooterBottom onOpenCS={onOpenCS} />
        </footer>
    );
};

export default Footer;
