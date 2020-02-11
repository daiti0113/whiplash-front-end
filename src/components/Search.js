import React, { useState } from 'react';
import ItemList from './ItemList';
import RefineMenu from './RefineMenu';
import SearchInput from './SearchInput';


export default function Search() {
    const [keywords, setKeywords] = useState([]); 
    const [refineMenuOpen, setRefineMenuOpen] = useState(false);
  
    return (
      <React.Fragment>
        <SearchInput setKeywords={setKeywords} setRefineMenuOpen={setRefineMenuOpen} />
        <RefineMenu refineMenuOpen={refineMenuOpen} setRefineMenuOpen={setRefineMenuOpen}/>
        <ItemList keywords={keywords} />
      </React.Fragment>
    )
};