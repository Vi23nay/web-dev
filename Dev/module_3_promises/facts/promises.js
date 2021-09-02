let fs = require("fs");
////-----call back way of doing async tasks

// console.log("before");
// fs.readFile("f1.txt", function cb(err, data){
//     console.log("data ->" + data);
// })

// console.log("after");




////------promises-------//
console.log("before");

let freadpromise = fs.promises.readFile("f1.txt");
console.log("promise ", freadpromise);

//promise-> resolve -> data
//function pass -> resolve

freadpromise.then(function cb(data){
    console.log("data " + data);
})

//function pass-> reject
freadpromise.catch(function cb(err) {
    console.log("error", err);
});

console.log("after");
