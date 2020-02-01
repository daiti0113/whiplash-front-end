import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Top from '/src/Top';
import 'typeface-roboto';
import "@babel/polyfill";


function App() {
  return (
    <Top />
  );
}

ReactDOM.render(<AppContainer><App /></AppContainer>, document.querySelector('#app'));