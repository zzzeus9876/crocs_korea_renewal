import React from 'react';
import MonthlyLeft from './MonthlyLeft';
import MonthlyRight from './MonthlyRight';
import ButtonWrap from './ButtonWrap';
import './scss/monthly.scss';

const Monthly = () => {
    return (
        <section className="monthly_wrap">
            <div className="inner">
                <MonthlyLeft />
                <ButtonWrap />
                <MonthlyRight />
            </div>
        </section>
    );
};

export default Monthly;
