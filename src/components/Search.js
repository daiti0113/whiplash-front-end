import React, { useState } from 'react';
import ItemList from './ItemList';
import SearchMenu from './SearchMenu';
import SearchInput from './SearchInput';


export default function Search() {
    const [keywords, setKeywords] = useState([]); 
    const [price, setPrice] = useState([]);
    const [manufacturer, setManufacturer] = useState([]);
    const [length, setLength] = useState(null);
    const [weight, setWeight] = useState(null);
    const [material, setMaterial] = useState(null);
    const [tipMaterial, setTipMaterial] = useState(null);
    const [tipShape, setTipShape] = useState(null);
    const [taper, setTaper] = useState(null);
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);

    const setState = {
      setKeywords,
      setPrice,
      setManufacturer,
      setLength,
      setWeight,
      setMaterial,
      setTipMaterial,
      setTipShape,
      setTaper,
      setSearchMenuOpen,
    }

    const state = {
      keywords,
      price,
      manufacturer,
      length,
      weight,
      material,
      tipMaterial,
      tipShape,
      taper,
      searchMenuOpen,
    }

    return (
      <React.Fragment>
        <SearchInput setState={setState}/>
        <SearchMenu state={state} setState={setState}/>
        <ItemList state={state} />
      </React.Fragment>
    )

  //   <React.Fragment>
  //   <SearchInput setKeywords={setKeywords} setSearchMenuOpen={setSearchMenuOpen} />
  //   <SearchMenu searchMenuOpen={searchMenuOpen} setSearchMenuOpen={setSearchMenuOpen}/>
  //   <ItemList keywords={keywords} />
  // </React.Fragment>

};