// console.log(typeof "Hello");
// console.log(typeof true);
// //////typeof null --> object

// let arr = [];
// function fn(){
//     console.log("inside fn");
// }

// //////type of array is object...
// console.log(typeof arr);

// //////to check that it is array or not
// console.log(Array.isArray(arr));//////--> return true / false
// console.log(typeof fn);






/////////////////////
function fn(){
    let rVal = fn1();
    console.log(rVal);
    console.log("I am a function");
    return "Hello";
}

function fn1(){
    console.log("I am fn1");
    return 10;
}

let rvall = fn();
console.log("rvall" , rvall);
