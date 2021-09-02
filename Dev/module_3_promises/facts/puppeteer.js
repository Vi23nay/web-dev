//npm i request
let puppeteer = require("puppeteer");
//creates headless browser -> unable to see browser opened but do their work in background
let browserStartPromise = puppeteer.launch({
    //visible
    headless : false,// by default -> true
    //type -> 1sec
    // slowMo : 1000,
    //browser screen pixels
    defaultViewport : null,
    
    //settings of chromium browser
    //--start-maximized only maxximise the browser but we need to set the pixels using defaultViewport
    args : ["--start-maximized", "--disable-notifications"]
});

browserStartPromise.then(function(browserObj){
    console.log("browser opened");
    // new tab 
    let browserTabOpenPromise = browserObj.newPage();
    browserTabOpenPromise.then(function(newTab){
        console.log("new tab opened");
        let gPageOpenPromise = newTab.goto("https://www.google.com/");
        gPageOpenPromise.then(function(){
        console.log("google home page opened");
})
    })
})


