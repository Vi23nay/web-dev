let fs = require("fs");

let files = ["../3-files/f1.txt", "../3-files/f2.txt", "f3.txt", "f4.txt", "f5.txt"];
////paralley read using async function
////also give the cb function from which we can intimate you after the work is completed

console.log("Before");

for(let i=0 ; i < files.length ; i++){
    fs.readFile(files[i] , cb);
}

function cb(err, data){
    if(err){
        console.log("Error : ", err);
    }else{
        console.log(data.byteLength)// gives bytes length of the file
        console.log("content: " + data);
    }
}

console.log("After");