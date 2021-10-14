//npm i request -> in termial to install request from npm
//npm i cheerio 
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
const { fstat } = require("fs");
console.log("before");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard", cb);
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
    //global tool
    let searchTool = cheerio.load(html);
    
    //css selector -> object
    //////this step makes our work easy
    //////big data -> divide 
    // let bowlerTables = searchTool(".table.bowler");
    // let htmlData = "";
    // for(let i=0 ; i < bowlerTables.length ; i++){
    //     //html function
    //     htmlData += searchTool(bowlerTables[i]).html();
    // }
    // fs.writeFileSync("table.html", htmlData);
    //loop
    ////name
    ////compare -> hwt find

//`````````````````````````````````````````````````//


    let bowlerTables = searchTool(".table.bowler tbody tr");
    let bowler = "";
    let hwt = 0;
    for(let i=0 ; i < bowlerTables.length ; i++){
        //row -> col
        let cols = searchTool(bowlerTables[i]).find("td");
        let name = searchTool(cols[0]).text();
        let wickets = searchTool(cols[4]).text();
        // console.log(name + " "  + wickets);
        if(wickets > hwt){
            bowler = name;
            hwt = wickets;
        }

    }
    console.log(bowler + "-->" + hwt);//highest wicket taker

}

console.log("after");