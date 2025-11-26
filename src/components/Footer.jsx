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
<<<<<<< HEAD
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
            <FooterBottom onOpenCS={onOpenCS} />
        </footer>
    );
};

export default Footer;
