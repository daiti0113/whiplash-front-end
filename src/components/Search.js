import React, { useState } from 'react';
import ItemList from './ItemList';
import SearchMenu from './SearchMenu';
import SearchInput from './SearchInput';


export default function Search() {
    const [keywords, setKeywords] = useState([]); 
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  
    return (
      <React.Fragment>
        <SearchInput setKeywords={setKeywords} setSearchMenuOpen={setSearchMenuOpen} />
        <SearchMenu searchMenuOpen={searchMenuOpen} setSearchMenuOpen={setSearchMenuOpen}/>
        <ItemList keywords={keywords} />
      </React.Fragment>
    )
};