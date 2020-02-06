import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'typeface-roboto';
import '@babel/polyfill';
import Header from './src/components/Header';
import Routes from './src/routes'

function App() {
  return (
    <div>
      <Header />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

ReactDOM.render(<AppContainer><App /></AppContainer>, document.querySelector('#app'));