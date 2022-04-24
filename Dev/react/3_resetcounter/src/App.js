import React,{ useState } from 'react';
import './App.css';
import Reset from "./components/Reset"
import CounterGroup from "./components/CounterGroup"
function App() {
    let [counterNo, updateCounterNo] = useState("")//state of Counter No.(child);
    let [resetVal, updatereset] = useState("")//state of Counter No.(child);

    function getFromCounter (cval, rval){
      // console.log(cval + ":"+ rval);
      updateCounterNo(cval);
      updatereset(rval)
    }

    function resetParentProps(){
      updateCounterNo("");
      updatereset("");
  }
    return (
      <>
        <h1>Reset Counter</h1>
        <Reset getFromCounter={getFromCounter}></Reset>
        <CounterGroup counterNo={counterNo} resetVal={resetVal} resetParentProps={resetParentProps}></CounterGroup>
      </>
    );
}

export default App;
