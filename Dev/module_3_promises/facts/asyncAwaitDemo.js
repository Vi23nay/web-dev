let fs = require("fs");

console.log("before");


(async function fn () {
    try{
        let ffReadPromise = fs.promises.readFile("./f1.txt");
        let content = await ffReadPromise;
        console.log("content " + content);
    }catch(err){
        console.log("error " + err);
    }

}) ()