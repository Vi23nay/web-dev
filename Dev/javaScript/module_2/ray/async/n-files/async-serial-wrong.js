let fs = require('fs');
let files = ["../3-files/f1.txt", "../3-files/f2.txt", "f3.txt", "f4.txt", "f5.txt","f6.txt","f7.txt"];

console.log("before");

fs.readFile(files[0], cb);

let i = 1;
function cb (err, data){
    console.log("data  " + data);
    while(i != files.length){//y toh parallel ki trh work kregaa
        console.log(i);
        fs.readFile(files[i], cb);
        i++;
    }
    // i++;
}

console.log("after");