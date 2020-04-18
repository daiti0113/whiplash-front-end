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
  length: {
    step: 10,
    min: 300,
    max: 400,
    marks: [
      {
        value: 300,
        label: '300mm',
      },
      {
        value: 400,
        label: '400mm',
      },
    ],
    "data-pos": "back",
    "data-label": "mm",
  },
  thickness: {
    step: 1,
    min: 7,
    max: 20,
    marks: [
      {
        value: 7,
        label: '7mm',
      },
      {
        value: 20,
        label: '20mm',
      },
    ],
    "data-pos": "back",
    "data-label": "mm",
  },
  evaluation: {
    step: 0.5,
    min: 1,
    max: 5,
    marks: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 5,
        label: '5',
      },
    ],
    "data-pos": "back",
    "data-label": "~",
  },
  evaluationCount: {
    step: 5,
    min: 0,
    max: 100,
    marks: [
      {
        value: 0,
        label: '0',
      },
      {
        value: 50,
        label: '50',
      },
      {
        value: 100,
        label: '100',
      },
    ],
    "data-pos": "back",
    "data-label": "~",
  },
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