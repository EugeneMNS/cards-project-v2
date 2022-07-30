import s from './Search.module.scss';
import Search from './Search';
import React, {useEffect} from 'react';


const SearchPacksContainer = () => {



    return <div className={s.search}>
        <Search/>
    </div>
}

export default SearchPacksContainer;