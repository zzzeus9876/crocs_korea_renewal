import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = ({ onOpenCS }) => {
    return (
        <>
            <div className="footer_bottom">
                <div className="wide_inner">
                    <button onClick={onOpenCS}>CS Center</button>
<<<<<<< HEAD
<<<<<<< HEAD
                    <button>
=======
=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
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
