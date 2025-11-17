// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import MainmenuList from './MainmenuList';
// // import './scss/header.scss';
// // import GnbWrap from './GnbWrap';
// // import Depth1 from './Depth1';
// // import Search from './Search';
// // import { useSearchStore } from '../store/useSearchStore';

// // const Header = () => {
// //     // const [searchOpen, setSearchOpen] = useState(false);
// //     const searchOpen = useSearchStore((state) => state.searchOpen);
// //     const onOpenSearch = useSearchStore((state) => state.onOpenSearch);
// //     const onCloseSearch = useSearchStore((state) => state.onCloseSearch);

// //     const [depthOpen, setDepthOpen] = useState(false);

// //     return (
// //         <>
// //             <header className={`header ${searchOpen ? 'hide' : ''}`}>
// //                 <div className="wide_inner">
// //                     <div className="header_left">
// //                         <h1 className="logo">
// //                             <Link to="/">
// //                                 <img src="./images/crocs_logo.svg" alt="crocs logo" />
// //                             </Link>
// //                         </h1>
// //                         <nav
// //                             onMouseEnter={() => setDepthOpen(true)}
// //                             onMouseLeave={() => setDepthOpen(false)}
// //                         >
// //                             <MainmenuList />
// //                             {depthOpen && <Depth1 />}
// //                         </nav>
// //                     </div>
// //                     <div className="header_right">
// //                         <GnbWrap onSearchClick={onOpenSearch} />
// //                     </div>
// //                 </div>
// //             </header>

// //             {searchOpen && <Search onClose={onCloseSearch} />}
// //         </>
// //     );
// // };

// // export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainmenuList from './MainmenuList';
import './scss/header.scss';
import GnbWrap from './GnbWrap';
import Depth1 from './Depth1';
import Search from './Search';
import { useSearchStore } from '../store/useSearchStore';

const Header = () => {
    const searchOpen = useSearchStore((state) => state.searchOpen);
    const onOpenSearch = useSearchStore((state) => state.onOpenSearch);
    const onCloseSearch = useSearchStore((state) => state.onCloseSearch);

    const [depthOpen, setDepthOpen] = useState(false);

    return (
        <>
            {/* header와 depth1을 감싸는 wrapper */}
            <div
                className={`header_wrapper ${depthOpen ? 'open' : ''} ${searchOpen ? 'hide' : ''}`}
                onMouseEnter={() => setDepthOpen(true)}
                onMouseLeave={() => setDepthOpen(false)}
            >
                <header className="header">
                    <div className="wide_inner">
                        <div className="header_left">
                            <h1 className="logo">
                                <Link to="/">
                                    <img src="./images/crocs_logo.svg" alt="crocs logo" />
                                </Link>
                            </h1>
                            <nav>
                                <MainmenuList />
                            </nav>
                        </div>
                        <div className="header_right">
                            <GnbWrap onSearchClick={onOpenSearch} />
                        </div>
                    </div>
                </header>

                {depthOpen && <Depth1 />}
            </div>

            {searchOpen && <Search onClose={onCloseSearch} />}
        </>
    );
};

export default Header;
