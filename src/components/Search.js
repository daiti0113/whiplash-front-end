import React, { useState } from 'react';
import ItemList from './ItemList';
import SearchMenu from './SearchMenu';
import SearchInput from './SearchInput';


export default function Search() {
    return (
      <React.Fragment>
        <SearchInput/>
        <SearchMenu/>
        <ItemList/>
      </React.Fragment>
    )
};