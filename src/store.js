import React, { createContext, useReducer } from 'react';

const initialState = {
    conditions: {
      keywords: [],
      price: [0, 2000],
      manufacturer: {
        tama: {display: 'TAMA', checked: false},
        pearl: {display: 'Pearl', checked: false},
        promark: {display: 'Promark', checked: false},
        vicFirth: {display: 'Vic Firth', checked: false},
      },
      length: [300, 400],
      thickness: [7, 15],
      weight: [0, 500],
      material: [],
      tipMaterial: [],
      tipShape: [],
      taper: [],
    },
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
      case 'UPDATE_CONDITIONS':
        return { ...state, conditions: action.payload }
      case 'UPDATE_SEARCH_MENU_OPEN':
        return { ...state, searchMenuOpen: action.payload }
      default:
        return { ...state };
    };
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
