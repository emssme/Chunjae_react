import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';

import reportWebVitals from './reportWebVitals';

//3. Test1 컴포넌트 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test4/>
    <Test5 irum="김천재" age="20" addr="마리오아울렛"/>
    <hr></hr>
    <Test5/>
    <hr></hr>
    <Test5 irum="김에듀" age="10" addr="마리오아울렛 2관"/>
    <hr></hr>
    <Test6 irum="김보경" age="25" addr="경기도"/>
    <hr/>
    <Test7 irum="이보경" age="25" addr="경기도"/>
    <Test8/>
    <Test9/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
