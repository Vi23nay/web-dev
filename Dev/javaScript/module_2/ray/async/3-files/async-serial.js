let fs = require("fs");

console.log("before")

fs.readFile("f1.txt" , cbf1);
function cbf1(err, content){
    console.log("content : " + content);
    fs.readFile("f2.txt" , cbf2);
    
}

function cbf2(err, content){
    console.log("content : " + content);
    fs.readFile("f3.txt" , cbf3);
}

function cbf3(err, content){
    console.log("content : " + content);
}

console.log("after")