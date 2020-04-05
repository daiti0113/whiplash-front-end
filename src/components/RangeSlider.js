import React, {useContext} from 'react';
import Slider from '@material-ui/core/Slider';
import {store} from '../store';

const config = {
  price: {
    step: 100,
    min: 100,
    max: 2000,
    marks: [
      {
        value: 100,
        label: '¥100',
      },
      {
        value: 2000,
        label: '¥2000',
      },
    ],
    "data-pos": "front",
    "data-label": "¥",
  },
  weight: {
    step: 100,
    min: 100,
    max: 500,
    marks: [
      {
        value: 100,
        label: '100g',
      },
      {
        value: 500,
        label: '500g',
      },
    ],
    "data-pos": "back",
    "data-label": "g",
  }
}

const valueText = (config) => (value) => config["data-pos"] === "front" ? `${config["data-label"]}${value}` : `${value}${config["data-label"]}`;

export default function RangeSlider(props) {
  const {type} = props;
  const {state, dispatch} = useContext(store);

  const handleChange = (event, newValue) => {
    dispatch({type: "UPDATE_CONDITIONS", payload: {...state.conditions, [type]: newValue}});
  };

  return (
      <Slider
        value={state.conditions[type]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby={type}
        valueLabelFormat={valueText(config[type])}
        key={type}
        {...config[type]}
      >
      </Slider>
  );
}