//npm i request -> in termial to install request from npm
//npm i cheerio 
let request = require("request");
let cheerio = require("cheerio");
console.log("before");
request("https://www.npmjs.com/package/cheerio", cb);
function cb(error, response, html){
    //console.log('error:', error);//print the error if one occured
    //console.log('body:',html) //print the html for the google  homepage
    if(error){
        console.log(error);//print the error if one occured
    }else if(response.statusCode == 404){
        console.log("Page Not Found");
    }
    else{
        // console.log("html",html);//print the html for the request made
        dataExtracter(html);

    }
}
function dataExtracter(html){
    //search tool -> function
    let searchTool = cheerio.load(html);
    
    //css selector -> object
    // let elemRep = searchTool("._50685029.truncate");
    let elemRep = searchTool("#readme>h1");
    //text
    let moduleName = elemRep.text().trim();
    console.log("moduleName" , moduleName);

}

console.log("after");