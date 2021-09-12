let fs = require("fs");
let files = ["../3-files/f1.txt", "../3-files/f2.txt", "f3.txt", "f4.txt", "f5.txt","f6.txt","f7.txt"];


console.log("before");
let initialPromise = fs.promises.readFile(files[0]);
for(let i = 1 ; i < files.length; i++){
    initialPromise = initialPromise.then(function cb (data) {
        console.log("content" + data);
        return fs.promises.readFile(files[i]);
    })
}

initialPromise.then(function cb (data) {
    console.log("content" + data);
})


console.log("after");