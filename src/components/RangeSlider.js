import React from 'react';
import Slider from '@material-ui/core/Slider';

function valuetext(state) {
  return `${state}°C`;
}

const config = {
  price: {
    step: 100,
    min: 100,
    max: 2000,
  },
  weight: {
    step: 10,
    min: 10,
    max: 50,
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
        getAriaValueText={valuetext}
        {...config[type]}
      />
  );
}