import React from 'react';

const ButtonWrap = ({ btnText }) => {
    return (
        <div className="btn_wrap">
            <button>
                <span>{btnText}</span>
            </button>
        </div>
    );
};

export default ButtonWrap;
