let fs = require("fs");
let xlsx = require("xlsx");

let data = require("./example.json");



//append data in file
data.push({
    "name": "Thor",
    "last name": "Rogers",
    "isAvenger": true,
    "friends": [
        "Bruce",
        "Peter",
        "Natasha"
    ],
    "age": 45,
    "address": {
        "city": "New york",
        "state": "manhatten"
    }
}
)



//important things we need
//workbook -> filepath, worksheet -> name, json data

function excelWriter(filepath, jsonData, sheetName) {// we crate this function
    let newWb = xlsx.utils.book_new();//create new worksheet

    let newWs = xlsx.utils.json_to_sheet(jsonData);//json data -> excel format

    xlsx.utils.book_append_sheet(newWb, newWs, sheetName);//newwb, worksheet, sheet name

    xlsx.writeFile(newWb, filepath);//write in xl file
}




//read xlsx file

function excelReader(filepath, sheetName) {
    if(fs.existsSync(filepath) == false){
        return [];
    }
    let wb = xlsx.readFile(filepath);//file path
    let excelData = wb.Sheets[sheetName];//sheet name
    let ans = xlsx.utils.sheet_to_json(excelData);//sheet data to json
    return ans;
}

console.log(ans);


