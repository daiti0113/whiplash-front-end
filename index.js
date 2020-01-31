import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppContainer } from 'react-hot-loader'

function App() {
  return (
    <Button variant="contained" color="primary">
        HelloWorld!!
    </Button>
  );
}

ReactDOM.render(<AppContainer><App /></AppContainer>, document.querySelector('#app'));