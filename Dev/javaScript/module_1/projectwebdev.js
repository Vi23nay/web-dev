let fs = require("fs");
let path = require("path");


let inputArr = process.argv.slice(2);
let webdevDir = inputArr[0];
let dir1 = inputArr[1];
let dir2 = inputArr[2];
let dir3 = inputArr[3];

let currentPath = process.cwd();
let webPath = path.join(currentPath,)
