// function fn(param){
//     console.log("params is" , param);
//     console.log("``````````````````````````");
// }

// //value pass
// fn(10);
// fn("dfosos");


// //refernce type values "address pass"
let a = [1,2,3,4,5,6];
// fn(a);
// fn({name : "vinay"});

/////////////function statement////////////////
// function fn(){
//     console.log("i am fn statement");
// }
// /////statement/////
// fn();


// let b = a;
// console.log("b" , b);
// a.pop();
// console.log("b" , b);

/////b also changes with a, because b has address of a/////

/////////////////////FUNCTION EXPRESSION///////////////////////////
/////IN JS FUNCTIONS ARE TREATED AS A VARIABLE////
// variable -> assign value / address 
// function adress -> variable assign


let exp = function(){
    console.log("i am a function expression");
}
//invokation
exp();



// *****////////////IIFE - > Immediately invoke function expression/////////////IMPORTANT//
//calling b sath sath //
(function fn() {
    console.log("I am a IIFE i will called immediately");
}) ();


/////Arrow function -> React////
