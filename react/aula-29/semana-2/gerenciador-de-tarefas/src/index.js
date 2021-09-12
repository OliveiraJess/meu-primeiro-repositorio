import React from 'react';
import ReactDOM from 'react-dom';
// import {AppPrincipal, AppVisualizar, AppEditar} from './components/App';
import App from './components/App'
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppVisualizar />
    <AppEditar /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

