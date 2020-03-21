import React, { useContext } from 'react';
import Slider from '@material-ui/core/Slider';
import { store } from '../store';

const config = {
  price: {
    step: 100,
    min: 100,
    max: 2000,
  },
  weight: {
    step: 100,
    min: 100,
    max: 500,
  }
}

export default function RangeSlider(props) {
  const { type } = props;
  const { state, dispatch } = useContext(store);

  const handleChange = (event, newValue) => {
    dispatch({ type: "UPDATE_PRICE", payload: newValue });
  };

  return (
      <Slider
        value={state.price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby={type}
        {...config[type]}
      />
  );
}