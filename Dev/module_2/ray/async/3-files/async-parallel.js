let fs = require("fs");

console.log("Before");
/////Unorder printing of content in files///////
fs.readFile("f1.txt" , cbf1);
fs.readFile("f2.txt" , cbf2);
fs.readFile("f3.txt" , cbf3);

function cbf1(err, content){
    if(err){
        console.log("Error : " + err);
    }else{
        console.log("Content : " + content);
    }
}
function cbf2(err, content){
    if(err){
        console.log("Error : " + err);
    }else{
        console.log("Content : " + content);
    }
}
function cbf3(err, content){
    if(err){
        console.log("Error : " + err);
    }else{
        console.log("Content : " + content);
    }
}


console.log("After");
