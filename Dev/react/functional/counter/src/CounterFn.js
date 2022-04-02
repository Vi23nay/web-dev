import React,{ useState } from 'react';
//to use state like property in functions use {useState}
function CounterFn(){
    //pass initial value of count in useState()
    //count -> state
    //updateState => function to change count
    let [count, updateState] = useState(0);
  
    const incrementCounter = () =>{
      updateState(count + 1);
    }
  
    // function incrementCounter(){
    //   updateState(count + 1);
    // }
    const decrementCounter = () =>{
      updateState(count - 1);
    }
//return -> whatever we need to render after change in count/state
    return(
    <div>
      <button onClick={incrementCounter}>+</button>
      <p>{count}</p>
      <button onClick={decrementCounter}>-</button>
    </div>)
  }

  export default CounterFn;