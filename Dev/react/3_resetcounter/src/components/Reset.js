import React,{ useState }from 'react'
import "./Reset.css"
function Reset(props) {
    let [countervalue, updateCval] = useState("");
    let [resetValue, updateRval] = useState("");

    let funCounterVal = (e) =>{
      updateCval(Number(e.target.value));
    }
    let funResetVal = (e) =>{
      updateRval(Number(e.target.value));
    }
    
    const funFromParent = props.getFromCounter;
    const resetCounter=()=>{
      funFromParent(countervalue, resetValue);
    }
    return (
      <div className="reset-container">
        <div>
          <span>Counter No : </span>
          <input value={countervalue} onChange={funCounterVal}/>
        </div>
        
        <div>
          <span>Reset By : </span>
          <input value={resetValue} onChange={funResetVal}/>
        </div>

        <button onClick={resetCounter}>Reset</button>
      </div>
    )
}

export default Reset