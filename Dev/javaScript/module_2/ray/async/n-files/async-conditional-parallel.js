let fs = require("fs");
let files = ["NA","../3-files/f1.txt", "../3-files/f2.txt", "f3.txt", "f4.txt", "f5.txt","f6.txt","f7.txt"];

// for(i in files){
//     fs.readFile(files[i], cb);
// }

fs.readFile(files[1], cbf1);
fs.readFile(files[2], cbf2);
fs.readFile(files[3], cbf3);
fs.readFile(files[4], cbf4);
fs.readFile(files[5], cbf5);
fs.readFile(files[6], cbf6);
fs.readFile(files[7], cbf7);

function cbf1(error, content){
    console.log("content" + content);
    if(content.byteLength > 7){
        cbf2;
    }else{
        cbf3;
    }
}
function cbf2(error, content){
    console.log("content" + content);
    if(content.byteLength > 10){
        cbf4;
    }else{
        cbf5;
    }
}
function cbf3(error, content){
    console.log("content" + content);
    if(content.byteLength > 20){
        cbf6;
    }else{
        cbf7;
    }
}
function cbf4(error, content){
    console.log("content" + content);
}
function cbf5(error, content){
    console.log("content" + content);
}
function cbf6(error, content){
    console.log("content" + content);
}
function cbf7(error, content){
    console.log("content" + content);
}
