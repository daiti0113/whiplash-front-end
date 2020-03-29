import React, { createContext, useReducer } from 'react';

const initialState = {
    keywords: [],
    price: [0, 2000],
    manufacturer: [],
    length: [],
    weight: [],
    material: [],
    tipMaterial: [],
    tipShape: [],
    taper: [],  
    searchMenuOpen: false,
 };

 // Storeの作成
const store = createContext(initialState);

// Providerの定義
const { Provider } = store;
const StateProvider = ({ children }) => {
  // Reducerの定義
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'UPDATE_KEYWORDS':
        return { ...state, keywords: action.payload }
      case 'UPDATE_PRICE':
        return { ...state, price: action.payload }
      case 'UPDATE_SEARCH_MENU_OPEN':
        return { ...state, searchMenuOpen: action.payload }
      case 'UPDATE_ITEMS':
        return { ...state, items: action.payload }
      case 'UPDATE_FOUND_ITEMS':
        return { ...state, foundItems: action.payload }
      default:
        return { ...state };
    };
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
