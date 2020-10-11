import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid #551b8b`
        },
        '&:after': {
          borderBottom: '2px solid pink',
        },
        '&$error:after': {
          borderBottomColor: "yellow",
        }
      },
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
