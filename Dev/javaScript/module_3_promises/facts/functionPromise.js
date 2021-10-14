//10-09-2021
//similar to createPromise.js
//very very imporatnt


let fs = require("fs");
function myPromisedFsReader(filePath){
    return new Promise(function (resolve, reject){
        console.log("8");
        fs.readFile(filePath, function cb(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
        console.log("9");
    })
}

console.log("before");
let fileReadPromise = myPromisedFsReader("f1.txt");
//state -> pending
console.log("24", fileReadPromise);

// 1sec -> async (1 sec)
// setTimeout is async function
setTimeout(function(){
    console.log("11" ,  fileReadPromise);
}, 3000);



function scb(data){ 
    console.log("hello  " + data);
}
function fcb(err){
    console.log("hello  ", err);
}

console.log("33");
//.then and .catch is synchronous but scb will wait until promise will be resolved or reject
fileReadPromise.then(scb);
fileReadPromise.catch(fcb);
console.log("35");

console.log("after");