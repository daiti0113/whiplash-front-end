import React from 'react';
import Slider from '@material-ui/core/Slider';

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
  const {type, state, setState} = props;

  const handleChange = (event, newValue) => {
    setState(newValue);
  };

  return (
      <Slider
        value={state}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby={type}
        {...config[type]}
      />
  );
}