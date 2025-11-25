import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = ({ onOpenCS }) => {
    return (
        <>
            <div className="footer_bottom">
                <div className="wide_inner">
                    <button onClick={onOpenCS}>CS Center</button>
<<<<<<< HEAD
                    <button>
=======
                    <Link to="/companyinfo">
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
                        <span>INFO</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default FooterBottom;
