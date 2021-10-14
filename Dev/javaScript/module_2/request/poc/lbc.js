//npm i request -> in termial to install request from npm
//npm i cheerio 
let request = require("request");
let cheerio = require("cheerio");
console.log("before");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary", cb);
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
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text");
    ////we have to use searchTool on line 28 because .text can apply only on search tool////
    let lbc = searchTool(elemRepArr[0]).text();
    //text
    
    console.log("lbc" , lbc);

}

console.log("after");