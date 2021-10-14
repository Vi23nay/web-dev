let fs = require("fs");
let input = ["Hello","Hii","How are you"];

////write
let jsonWriteAble = JSON.stringify(input);
fs.writeFileSync("abc.json",jsonWriteAble);

////read
let content = fs.readFileSync("abc.json");
let jsonData = JSON.parse(content);
console.log(jsonData);

//append in json file
jsonData

