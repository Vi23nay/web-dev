//npm i request -> in termial to install request from npm
//npm i cheerio 
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
const { fstat } = require("fs");

bowlersArr = [];
bowlersCount = 0;

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
//insights -> you don't get all the data initially
function dataExtracter(html){
    //search tool -> function
    //global tool
    //page -> tables 
    let searchTool = cheerio.load(html);
    
    //css selector -> object
    let bowler = searchTool(".table.bowler tbody tr");

    for(let i=0 ; i < bowler.length ; i++){
        //row -> col
        let cols = searchTool(bowler[i]).find("td");
        if(cols.length > 1){
            bowlersCount++;
        }
    }

    for(let i=0 ; i < bowler.length ; i++){
        let cols = searchTool(bowler[i]).find("td");
        if(cols.length > 1){
            let aElem = searchTool(cols[0]).find("a");
            let link = aElem.attr("href");
            // console.log(link);
            //we didn't get the full link we only get the link for further accesing
            let fullLink = `https://www.espncricinfo.com${link}`;
            // console.log(fullLink);
            // async function -> parallely chlega
            request(fullLink , newcb);
        }
        
    }
    
}

function newcb(error, response, html){
    if(error){
        console.log("error");
    }else if(response.statusCode == "404"){
        console.log("Page Not Found");
    }
    else{
        getBirthday(html);
        console.log("```````````````````");


        if(bowlersArr.length == bowlersCount){
            console.table(bowlersArr);

            sortBirthday(bowlersArr);


        }
    }
}

function getBirthday(html){
    let searchTool = cheerio.load(html);
    // let headingsArr = searchTool(".player-card-description.gray-900");
    let headingsArr = searchTool(".player-card-description");
    let name = searchTool(headingsArr[0]).text();
    let age = searchTool(headingsArr[2]).text();
    
    bowlersArr.push({name, age});

    console.log(name + " " + age);
}

console.log("after");


//////--------------------------SORTING-----------------------------------/////
function sortBirthday(bowlersArr){
    //sort
    // age -> convert in days

    let newArr = bowlersArr.map(singleFn);// map function returns arr
    function singleFn(obj){
        let name = obj.name;
        let age = obj.age;
        let ageArr = obj.age.split(" ");
        let years = ageArr[0].slice(0, ageArr[0].length - 1);
        let days = ageArr[1].slice(0, ageArr[1].length - 1);

        let ageIndays = Number(years) * 365 + Number(days);
        return {
            name : name,
            ageIndays : ageIndays,
            age : age

        }
    }

    let sortedArr = newArr.sort(cb);//predefined sort
    function cb(objA, objB) {
        return objA.ageIndays - objB.ageIndays;
    }

    let finalArr = sortedArr.map(removeAgeInDays);
    function removeAgeInDays(obj){
        return{
            name : obj.name,
            age : obj.age
        }
    }
    console.table(finalArr);
}