let fs = require("fs");
let files = ["../3-files/f1.txt", "../3-files/f2.txt", "f3.txt", "f4.txt", "f5.txt","f6.txt","f7.txt"];

fs.readFile(files[0] , cbf0);

function cbf0(error, content){
    console.log("content : " + content);
    if(content.byteLength > 7){
        fs.readFile(files[1], cbf1);
    }else{
        fs.readFile(files[2] , cbf2);
    }
}

function cbf1(error, content){
    console.log("content : " + content);
    if(content.byteLength > 10){
        fs.readFile(files[3], cbf3);
    }else{
        fs.readFile(files[4], cbf3);
    }
}

function cbf2(error, content){
    console.log("content : " + content);
    if(content.byteLength > 20){
        fs.readFile(files[5], cbf3);
    }else{
        fs.readFile(files[6], cbf3);
    }
}
function cbf3(error, content){
    console.log("content : " + content);
}
// function cbf4(error, content){
//     console.log("content : " + content);
// }