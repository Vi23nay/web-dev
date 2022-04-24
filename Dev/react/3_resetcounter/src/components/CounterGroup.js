//just type rfce
import React from 'react'
import "./CounterGroup.css"
import Counter from "./Counter"

function CounterGroup(props) {
  let cval = props.counterNo;
  let rval = props.resetVal;
  // console.log(cval);
  return (
    <div className="counter-group">
      <Counter Cno={1} cval={cval} rval={rval} resetParentProps={props.resetParentProps}></Counter>
      <Counter Cno={2} cval={cval} rval={rval} resetParentProps={props.resetParentProps}></Counter>
      <Counter Cno={3} cval={cval} rval={rval} resetParentProps={props.resetParentProps}></Counter>
    </div>
  )
}

export default CounterGroup