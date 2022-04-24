import React,{useState} from 'react'
import "./Counter.css"
function Counter(props) {
    let [count, updateCount] = useState(0);

    //coming from parent (App)
    let counter = Number(props.Cno);
    let counterNoFromParent = Number(props.cval);
    let rvalFromParent = Number(props.rval);//reset value from parent
    let resetParentProps = props.resetParentProps; 


    if(counterNoFromParent == counter && count != rvalFromParent){
        updateCount(rvalFromParent);
        resetParentProps();
    }

    let increment = ()=>{
        updateCount(count+1);
    }
    let decrement = ()=>{
        updateCount(count-1);
    }

    return (
        <div>
            <div className="CounterNumber">Counter No. : {counter}</div>
            <button onClick = {increment}>+</button>
            <div>Count : {count}</div>
            <button onClick = {decrement}>-</button>
        </div>
    )
}

export default Counter