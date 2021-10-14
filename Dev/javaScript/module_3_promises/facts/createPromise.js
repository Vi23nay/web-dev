let fs = require("fs");
// reference -> promises.js//


//implementation of our promise function
function myPromisedFsReader(filePath) {
    //using this existing function
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}




////------promises-------//
console.log("before");

// let freadpromise = fs.promises.readFile("f1.txt");
let freadpromise = myPromisedFsReader("f1.txt");
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
