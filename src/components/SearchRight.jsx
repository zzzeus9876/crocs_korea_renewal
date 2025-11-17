// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const searchbanner = [
// //     { id: 1, src: './images/search_img_01.svg', alt: 'brand prrtnerships' },
// //     { id: 2, src: './images/search_img_02.svg', alt: 'crocs x LE SSERAFIM' },
// // ];

// // const SearchRight = () => {
// //     const shuffleSbanner = (sbanner) => {
// //         const newSbanner = [...sbanner];
// //         for (let i = newSbanner.length - 1; i > 0; i--) {
// //             const j = Math.floor(Math.random() * (i + 1));
// //             [newSbanner[i], newSbanner[j]] = [newSbanner[j], newSbanner[i]];
// //         }

// //         return newSbanner;
// //     };

// //     const [randomSbanner, setRandomSbanner] = useState([]);

// //     useEffect(() => {
// //         setRandomSbanner(shuffleSbanner(searchbanner));
// //     }, []);

// //     return (
// //         <div>
// //             {searchbanner.map((sbanner) => (
// //                 <Link key={sbanner.id}>
// //                     <img src={sbanner.src} alt={sbanner.alt} />
// //                 </Link>
// //             ))}
// //         </div>
// //     );
// // };

// // export default SearchRight;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const searchbanner = [
    { id: 1, src: './images/search_img_01.svg', alt: 'brand prrtnerships' },
    { id: 2, src: './images/search_img_02.svg', alt: 'crocs x LE SSERAFIM' },
];

const SearchRight = () => {
    const [randomBanner, setRandomBanner] = useState(null);

    useEffect(() => {
        // 랜덤 인덱스 선택
        const randomIndex = Math.floor(Math.random() * searchbanner.length);
        setRandomBanner(searchbanner[randomIndex]);
    }, []);

    if (!randomBanner) return null; // 아직 로딩 중일 때 아무것도 안 보여줌

    return (
        <div>
            <Link>
                <img src={randomBanner.src} alt={randomBanner.alt} />
            </Link>
        </div>
    );
};

export default SearchRight;
