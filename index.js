import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'typeface-roboto';
import '@babel/polyfill';
import { BrowserRouter } from 'react-router-dom';
import Header from './src/components/Header';
import Routes from './src/routes'
import { StateProvider } from './src/store';

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Header />
        <Routes />
        {/* <Footer /> */}
      </BrowserRouter>
    </StateProvider>
  );
}

ReactDOM.render(<AppContainer><App /></AppContainer>, document.querySelector('#app'));