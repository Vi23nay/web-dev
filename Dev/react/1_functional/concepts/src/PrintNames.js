//import
import React from 'react';

//children
//object -> props
//functional -> html milegi
function PrintMyName(props){
    let {name, age} = props;
    return <h1>My Name is {name} is of age {age} years</h1>;
    // return <h1>My Name is {props.name} is of age {props.age} years</h1>;
  }
  
  //parent
  function PrintNames(){
    return(
      <>
        <PrintMyName name="vinay" age={22}></PrintMyName>
        <PrintMyName name="Nikhil" age={21}></PrintMyName>
        <PrintMyName name="Paras" age={24}></PrintMyName>
        <PrintMyName name="Deepak" age={20}></PrintMyName>
      </>
    )
  }

  //export
  export default PrintNames;