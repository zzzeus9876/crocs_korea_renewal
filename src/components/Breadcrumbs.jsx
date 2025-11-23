// import React from 'react';
// import './scss/WomenComponents.scss';
// import { Link } from 'react-router-dom';

// export default function Breadcrumbs({ category, subcategory }) {
//     return (
//         <div className="breadcrumbs">
//             <ul className="breadcrumbs__list">
//                 <li className="breadcrumbs__list--home">
//                     <Link to="/" className="breadcrumbs__list--home_link">
//                         <img src="/images/Sub_Women_Images/icon-home.svg" alt="홈 버튼" />
//                     </Link>
//                 </li>
//                 <li className="breadcrumbs__list--section">
//                     <span>:</span>
//                 </li>
//                 <li className="breadcrumbs__list--women">
//                     <Link to="{`/${category}`}" className="breadcrumbs__list--women_link">
//                         <span>{category}</span>
//                         <img src="/images/Sub_Women_Images/icon-arrow-right.svg" alt="여성 버튼" />
//                     </Link>
//                 </li>
//                 {subcategory && (
//                     <>
//                         <li className="breadcrumbs__list--section">
//                             <span>:</span>
//                         </li>
//                         <li className="breadcrumbs__list--Fur-lined">
//                             <Link
//                                 to={`/${category}/${subcategory}`}
//                                 className="breadcrumbs__list--Fur-lined_link"
//                             >
//                                 <span>{subcategory}</span>
//                                 <img
//                                     src="/images/Sub_Women_Images/icon-close_cross.svg"
//                                     alt="닫기 버튼"
//                                 />
//                             </Link>
//                         </li>
//                     </>
//                 )}
//             </ul>
//             <div className="breadcrumbs__title">
//                 <h2>{subcategory || category || '털안감 라인드 클로그'}</h2>
//             </div>
//         </div>
//     );
// }

import React from 'react';
import './scss/WomenComponents.scss';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ category, subcategory }) {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__list--home">
                    <Link to="/" className="breadcrumbs__list--home_link">
                        <img src="/images/Sub_Women_Images/icon-home.svg" alt="홈 버튼" />
                    </Link>
                </li>

                <li className="breadcrumbs__list--section">
                    <span>:</span>
                </li>

                {/* 🟢 메인 카테고리 */}
                <li className="breadcrumbs__list--women">
                    <Link to={`/${category}`} className="breadcrumbs__list--women_link">
                        <span>{category}</span>
                        <img
                            src="/images/Sub_Women_Images/icon-arrow-right.svg"
                            alt="카테고리 버튼"
                        />
                    </Link>
                </li>

                {/* 🟢 서브 카테고리 */}
                {subcategory && (
                    <>
                        <li className="breadcrumbs__list--section">
                            <span>:</span>
                        </li>
                        <li className="breadcrumbs__list--Fur-lined">
                            <Link
                                to={`/${category}/${subcategory}`}
                                className="breadcrumbs__list--Fur-lined_link"
                            >
                                <span>{subcategory}</span>
                                <img
                                    src="/images/Sub_Women_Images/icon-close_cross.svg"
                                    alt="닫기 버튼"
                                />
                            </Link>
                        </li>
                    </>
                )}
            </ul>

            <div className="breadcrumbs__title">
                <h2>{subcategory || category}</h2>
            </div>
        </div>
    );
}
