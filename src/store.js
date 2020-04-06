import React, {createContext, useReducer} from 'react';

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
      thickness: [7, 20],
      weight: [0, 500],
      material: {
        hickory: {display: 'Hickory', checked: false},
        oak: {display: 'Oak', checked: false},
        maple: {display: 'Maple', checked: false},
        japaneseWhiteOak: {display: 'Japanese White Oak', checked: false},
        composite: {display: 'Composite', checked: false},
        persimmon: {display: 'Persimmon', checked: false},
      },
      tipMaterial: {
        wood: {display: 'Wood', checked: false},
        nylon: {display: 'Nylon', checked: false},
        specialty: {display: 'Specialty', checked: false},
      },
      tipShape: {
        barrel: {display: 'Barrel', checked: false},
        arrow: {display: 'Arrow', checked: false},
        tearDrop: {display: 'Tear Drop', checked: false},
        oval: {display: 'Oval', checked: false},
        round: {display: 'Round', checked: false},
        acorn: {display: 'Acorn', checked: false},
        other: {display: 'Other', checked: false}        
      },
      taper: {
        s: {display: 'S', checked: false},
        m: {display: 'M', checked: false},
        l: {display: 'L', checked: false},
      },
      evaluation: 1,
      evaluationCount: 0,
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
