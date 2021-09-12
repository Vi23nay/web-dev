let fs = require("fs");

console.log("before");

let firstFileReadPromise = fs.promises.readFile("../f1.txt");
let secondFileReadPromise = fs.promises.readFile("../f2.txt");
let thirdFileReadPromise = fs.promises.readFile("../f3.txt");


firstFileReadPromise.then(cb1);
secondFileReadPromise.then(cb2);
thirdFileReadPromise.then(cb3);

function cb1(content){
    console.log("content " + content);
}
function cb2(content){
    console.log("content " + content);
}
function cb3(content){
    console.log("content " + content);
}

console.log("after");