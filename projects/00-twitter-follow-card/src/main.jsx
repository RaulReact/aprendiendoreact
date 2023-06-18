import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';

import './index.css'

// Punto de entrada de la aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <App></App>
  </React.Fragment>
);
