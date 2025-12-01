import React from 'react';
import { Link } from 'react-router-dom';

const FooterContents = () => {
    return (
        <div className="wide_inner">
            <ul className="footer_left">
                <li>
                    <Link to="/store">Store</Link>
                </li>
                <li>
                    <Link to="/Brand">About</Link>
                </li>
                <li>
                    <Link to="#">Privacy Policy</Link>
                </li>
            </ul>
            <div className="footer_right">
                <div className="sns_img_box">
                    <p>
                        <img src="/images/icon-insta.png" alt="" />
                    </p>
                    <p>
                        <img src="/images/icon-youtube.png" alt="" />
                    </p>
                    <p>
                        <img src="/images/icon-kakao.png" alt="" />
                    </p>
                    <p>
                        <img src="/images/icon-tiktok.png" alt="" />
                    </p>
                </div>
                <div className="copy-text">© 2025 Crocs Retail, LLC</div>
            </div>
        </div>
    );
};

export default FooterContents;
