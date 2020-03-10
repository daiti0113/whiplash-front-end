import React, { useState } from 'react';
import ItemList from './ItemList';
import SearchMenu from './SearchMenu';
import SearchInput from './SearchInput';


export default function Search() {
    const [keywords, setKeywords] = useState([]); 
    const [price, setPrice] = useState([100, 1500]);
    const [manufacturer, setManufacturer] = useState([]);
    const [length, setLength] = useState(null);
    const [weight, setWeight] = useState([300, 500]);
    const [material, setMaterial] = useState(null);
    const [tipMaterial, setTipMaterial] = useState(null);
    const [tipShape, setTipShape] = useState(null);
    const [taper, setTaper] = useState(null);
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);

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

    return (
      <React.Fragment>
        <SearchInput setState={setState}/>
        <SearchMenu state={state} setState={setState}/>
        <ItemList state={state} />
      </React.Fragment>
    )
};