//bad way
//brute force

let fs = require("fs");


// console.log("before")
// let ffReadPromise = fs.promises.readFile("f1.txt");
// ffReadPromise.then(cb1);
// ffReadPromise.catch(fcb);

// function cb1(content){
//     console.log("content " + content);
//     let sfReadPRomise = fs.promises.readFile("f2.txt");
//     sfReadPRomise.then(cb2);
//     sfReadPRomise.catch(fcb);
// }

// function cb2(content){
//     console.log("Content " + content);
//     let thFileReadPromise = fs.promises.readFile("f3.txt");
//     thFileReadPromise.then(cb3);
//     thFileReadPromise.catch(fcb);
// }

// function cb3(content){
//     console.log("content " + content);
// }

// console.log("after");

// function fcb(err){//failure call back for catch
//     console.log("error " + err);
// }


//good way


console.log("before")
let ffReadPromise = fs.promises.readFile("f1.txt");

ffReadPromise.then(cb1).then(cb2).then(cb3);


function cb1(content){
    console.log("content " + content);
    let sfReadPRomise = fs.promises.readFile("f2.txt");
    // sfReadPRomise.then(cb2);
    // sfReadPRomise.catch(fcb);
    return sfReadPRomise;
}

function cb2(content){
    console.log("Content " + content);
    let thFileReadPromise = fs.promises.readFile("f3.txt");
    // thFileReadPromise.then(cb3);
    // thFileReadPromise.catch(fcb);
    return thFileReadPromise;
}

function cb3(content){
    console.log("content " + content);
}

console.log("after");












