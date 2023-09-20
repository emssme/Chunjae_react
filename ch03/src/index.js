import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test8 from './Test8';
//bootstrap 설치
//yarn으로 설치: yarn add react-bootstrap bootstrap
//npm으로 설치: npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test8/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
