//super easy

let fs = require("fs");

console.log("before");

(async function fn(){
    try{
        let ffReadPromise = fs.promises.readFile("../f1.txt");
        let content = await ffReadPromise;
        console.log("content " + content);
        
        let sfReadPromise = fs.promises.readFile("../f2.txt");
        content = await sfReadPromise;
        console.log("content " + content);

        let tfReadPromise = fs.promises.readFile("../f3.txt");
        content = await tfReadPromise;
        console.log("content " + content);


    }catch (err){
        console.log(err);
    }
}) ();


console.log("after");