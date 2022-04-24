import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterFn from './CounterFn'
import CounterClass from './CounterClass'
ReactDOM.render(
  <CounterFn></CounterFn>
  // <CounterClass></CounterClass>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

