import React from 'react';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import './scss/search.scss';
import SearchLeft from './SearchLeft';

const Search = () => {
    return (
        <div className="search_wrap">
            <div className="search_top">
                <SearchInput />
            </div>
            <div className="search_bottom">
                <div className="search_left">
                    <SearchLeft />
                </div>
                <div className="search_right">
                    <Link>
                        <img src="./images/search_img.svg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Search;
