import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import s from './Search.module.scss';


 const Search = () => {


    return (
        <input className={s.searchInput}
               type="text"
               placeholder={'Search...'}
        />

    )
};

export default Search;