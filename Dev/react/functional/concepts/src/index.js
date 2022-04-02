import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrintNames from './PrintNames'
// //children
// //object -> props
// //functional -> html milegi
// function PrintMyName(props){
//   let {name, age} = props;
//   return <h1>My Name is {name} is of age {age} years</h1>;
//   // return <h1>My Name is {props.name} is of age {props.age} years</h1>;
// }

// //parent
// function PrintNames(){
//   return(
//     <>
//       <PrintMyName name="vinay" age={22}></PrintMyName>
//       <PrintMyName name="Nikhil" age={21}></PrintMyName>
//       <PrintMyName name="Paras" age={24}></PrintMyName>
//       <PrintMyName name="Deepak" age={20}></PrintMyName>
//     </>
//   )
// }

//code read -> bottom to top
//dom render -> content print -> html root -> id -> content
ReactDOM.render(
  // <>
  // <h1>Hello React1!</h1>
  // <h1>Hello React2!</h1>
  // <h1>Hello React3!</h1>
  // </>
  <PrintNames></PrintNames>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
