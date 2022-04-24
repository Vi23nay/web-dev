import React from 'react';

class CounterClass extends React.Component {
    //which i want to change -> state me add
    state = {
        count: 0
    }

    //Functions for update states
    incrementCounter = () =>{
        // this.state.count++ -> won't work

        //setState
        this.setState({
            count : this.state.count + 1
        })
    }
    
    decrementCounter = () =>{
        // count : count-1;
        this.setState({
            count : this.state.count - 1
        })
    }
    //jis interaction se change krna h...wo change kardo

    //if you change the state the render function will run again with the new state variable
    render() {
        return(
            <div>
                <button onClick = {this.incrementCounter}>+</button>
                <p>{this.state.count}</p>
                <button onClick = {this.decrementCounter}>-</button>
            </div>
        )
    }
}
export default CounterClass;
