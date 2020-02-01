import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Top from '/src/Top';
import 'typeface-roboto';


function App() {
  return (
    <Top />
  );
}

ReactDOM.render(<AppContainer><App /></AppContainer>, document.querySelector('#app'));