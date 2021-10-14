let fs = require("fs");

//.//--------------Synchronous------------------//

// let content = fs.readFileSync("./cb.js");
// console.log("Before");
////NOTE-----A JS DEV CAN'T CREATE AN ASYNCHRONOUS FUNCTION ////
// console.log("content" + content)

// console.log("After");

//------------------Asynchronous-------------------------//
console.log("Before");

fs.readFile("cb.js" , callBack);
function callBack(err, data){
    if(err){
        console.log("error" , err);
    }else{
        console.log("data" + data);
    }
}

console.log("After");