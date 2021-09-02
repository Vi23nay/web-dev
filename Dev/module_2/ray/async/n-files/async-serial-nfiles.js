let fs = require("fs");

let files = ["../3-files/f1.txt", "../3-files/f2.txt", "f3.txt", "f4.txt", "f5.txt"];


/////-----------------------WRONG CODE///////////////////////////////////
// console.log("before");
// ////first file read -> cb call and then
// ////wrong code 

// for(let i = 0 ; i < files.length;){
//     console.log(i);
//     fs.readFile(files[i] , function cb(err, data) {
//         console.log("data" + data);
//         i++;
//     });
//     i++;// yaha b galat hai, qki fr parallel hi ho jaega;
// }

// console.log("after");

//output -> before 

/////////----------------------Right code-----------------------------////////////
console.log("before");

function serialReader(i) {
    if(i == files.length){
        return;
    }

    fs.readFile(files[i], function cb(err, data) {
        console.log("data   " + data);

        serialReader(i + 1);
    });
}

serialReader(0);
console.log("after");