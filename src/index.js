import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {ProductProvider} from './context';
const app =(
<BrowserRouter>
  <App />
</BrowserRouter>
)
ReactDOM.render(
  <ProductProvider>{app}</ProductProvider>,
  document.getElementById('root')
);
