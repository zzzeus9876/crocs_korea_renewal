// import React, { useEffect } from 'react';
// import Breadcrumbs from './Breadcrumbs';
// import SizeMenu from './SizeMenu';
// import FilterMenu from './FilterMenu';
// import ColorMenu from './ColorMenu';
// import PriceMenu from './PriceMenu';
// // import './scss/WomenComponents.scss';
// import './scss/leftNavigation.scss';
// import { useCrocsProductStore } from '../store/useCrocsProductStore';
// import { useCrocsSizeStore } from '../store/useCrocsSizeStore';
// import { useParams } from 'react-router-dom';

// export default function LeftNavigation({ category, subcategory, filters = [], priceRanges = [] }) {
//     const { crocsSizes, onFetchSize } = useCrocsSizeStore();
//     // const { selectedCategory, selectedSubcategory } = useCrocsProductStore();

//     // 사이즈 불러오기
//     useEffect(() => {
//         onFetchSize();
//     }, []);

//     return (
//         <div className="left_nav__section_wrap">
//             {/* <Breadcrumbs category={selectedCategory} subcategory={selectedSubcategory} /> */}
//             <Breadcrumbs category={category} subcategory={subcategory} />
//             <nav className="left_nav">
//                 {/* 🔥 store에서 불러온 사이즈를 SizeMenu로 전달 */}
//                 <SizeMenu sizes={crocsSizes} />
//                 <div className="breadcrumbs__line"></div>
//                 <FilterMenu filters={filters} />
//                 <div className="breadcrumbs__line"></div>
//                 <ColorMenu />
//                 <div className="breadcrumbs__line"></div>
//                 <PriceMenu priceRanges={priceRanges} />
//             </nav>
//         </div>
//     );
// }

import React, { useEffect } from 'react';
import Breadcrumbs from './Breadcrumbs';
import SizeMenu from './SizeMenu';
import FilterMenu from './FilterMenu';
import ColorMenu from './ColorMenu';
import PriceMenu from './PriceMenu';
import './scss/leftNavigation.scss';
import { useCrocsSizeStore } from '../store/useCrocsSizeStore';
import { useParams } from 'react-router-dom';

export default function LeftNavigation({ category, subcategory, filters = [], priceRanges = [] }) {
    const { crocsSizes, onFetchSize } = useCrocsSizeStore();
    const params = useParams();

    // ⭐ 최종적으로 사용할 category, subcategory
    const finalCategory = category || params.cate || 'new';
    const finalSubcategory = subcategory || params.subcategory || null;

    useEffect(() => {
        onFetchSize();
    }, []);

    return (
        <div className="left_nav__section_wrap">
            {/* 🔥 수정 포인트: category/subcategory → finalCategory/finalSubcategory */}
            <Breadcrumbs category={finalCategory} subcategory={finalSubcategory} />

            <div className="left_nav">
                <SizeMenu sizes={crocsSizes} />
                <div className="breadcrumbs__line" />
                <FilterMenu filters={filters} />
                <div className="breadcrumbs__line" />
                <ColorMenu />
                <div className="breadcrumbs__line" />
                <PriceMenu priceRanges={priceRanges} />
            </div>
        </div>
    );
}
