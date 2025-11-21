import React, { useEffect } from 'react';
import Breadcrumbs from './Breadcrumbs';
import SizeMenu from './SizeMenu';
import FilterMenu from './FilterMenu';
import ColorMenu from './ColorMenu';
import PriceMenu from './PriceMenu';
// import './scss/WomenComponents.scss';
import './scss/leftNavigation.scss';

import { useCrocsSizeStore } from '../store/useCrocsSizeStore';

export default function LeftNavigation({
    category = [],
    subcategory = [],
    filters = [],
    priceRanges = [],
}) {
    const { crocsSizes, onFetchSize } = useCrocsSizeStore();

    // 사이즈 불러오기
    useEffect(() => {
        onFetchSize();
    }, []);

    return (
        <div className="left_nav__section_wrap">
            <Breadcrumbs category={category} subcategory={subcategory} />
            <nav className="left_nav">
                {/* 🔥 store에서 불러온 사이즈를 SizeMenu로 전달 */}
                <SizeMenu sizes={crocsSizes} />
                <div className="breadcrumbs__line"></div>
                <FilterMenu filters={filters} />
                <div className="breadcrumbs__line"></div>
                <ColorMenu />
                <div className="breadcrumbs__line"></div>
                <PriceMenu priceRanges={priceRanges} />
            </nav>
        </div>
    );
}
