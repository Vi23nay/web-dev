let fs = require("fs");


// let buffer = fs.readFileSync("./example.json");
// console.log(buffer);
// console.log("``````````````````");

// //read json file
// let data = JSON.parse(buffer);//to read json data and give it as it is..
// console.log(data);



//GOOD WAY
//second way of reading json file
let data = require("./example.json");



//append data in file
data.push({
        "name" : "Thor",
        "last name" : "Rogers",
        "isAvenger" : true,
        "friends" : [
            "Bruce",
            "Peter",
            "Natasha"
        ],
        "age" : 45,
        "address" : {
            "city" : "New york",
            "state" : "manhatten"
        }
    }
)

let jsonWriteAbleData = JSON.stringify(data);
fs.writeFileSync("example.json", jsonWriteAbleData)