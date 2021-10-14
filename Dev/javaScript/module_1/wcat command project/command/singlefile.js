//handling command 1 and 2//

let fs = require("fs");

function singleFileRead(path){
    let file = fs.readFileSync(path);
    console.log(file+"");
}



module.exports = {
    command1fxn : singleFileRead
}