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
let page, browser, resourcesTab;

browserStartPromise
    .then(function(browserObj){
    console.log("browser opened");
    // new tab 
    browser = browserObj;
    let browserTabOpenPromise = browserObj.newPage();
    return browserTabOpenPromise
}).then(function(newTab){
    page = newTab;
    console.log("new tab opened");
    let gPageOpenPromise = newTab.goto("https://www.google.com/");
    return gPageOpenPromise
}).then(function(){
    console.log("google home page opened");
    //keyboard -> data entry
    let waitForTypingPromise = page.type("input[title='Search']", "pepcoding");
    return waitForTypingPromise;
}).then(function(){
    //keyboard -> specific key press
    let enterWillBePressedPromise = page.keyboard.press('Enter', {delay : 100});
    return enterWillBePressedPromise;
})

// .then(function() {
//     //wait for element to be visible on the new page -> whenever it's visible or loaded
//     let waitForElementPromise = page.waitForSelector(".LC20lb.DKV0Md", {visible: true});
//     return waitForElementPromise;
// }).then(function() {
//     //mouse function
//     let elemClickPromise = page.click(".LC20lb.DKV0Md");
//     return elemClickPromise;
// })

.then(function(){
    //here we use function defined by me waitAndClick
    let waitAndClickPromise = waitAndClick(".LC20lb.DKV0Md", page);
    console.log("promise ouput", waitAndClickPromise);
    return waitAndClickPromise;
})

// .then(function () {
//     let waitForDialgueBoxAppearsPromise = page.waitForSelector(".red-text.no-margin", {visible : true});
//     return waitForDialgueBoxAppearsPromise;
// }).then(function (){
//     let dialogueBoxClickPromise = page.click(".red-text.no-margin", {delay : 100});
//     return dialogueBoxClickPromise;

// })
.then(function(){
    // let waitAndClickPromise = waitAndClick(".red-text.no-margin", page);
    let waitAndClickPromise = handleifNotPresent(".red-text.no-margin", page);
    return waitAndClickPromise;
})

.then(function() {
    //page element -> cheerio
    //gives array of all elems having that selector
    let allLisPromise = page.$$(".site-nav-li");
    return allLisPromise; 
}).then(function(allElemsArr){
    let resoucesPageClickPromise = allElemsArr[7].click({delay : 100});
    return resoucesPageClickPromise;
}).then(function() {
    let waitPromise = page.waitFor(2000);
    return waitPromise;
})
.then(function() {
    let listOfOpenedTabsPromise = browser.pages();
    return listOfOpenedTabsPromise;
})

.then(function(listOfOpenedTabsArray) {
    resourcesTab = listOfOpenedTabsArray[listOfOpenedTabsArray.length - 1];

    let waitForLevel1Promise = waitAndClick('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]', resourcesTab);
    return waitForLevel1Promise;
    
    // let waitForLevel1Promise = resourcesTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]', {visible : true});
//     return waitForLevel1Promise;
// }).then(function() {
//     let levelOneOpenedPromise = resourcesTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
//     return levelOneOpenedPromise;
// })


})


.then(function(){
    console.log("Level 1 opened");
})
//browser.pages -> array of all the open tabs



// user defined promise based function -> it will return  a promise that will be 
// resolved when the user has waited for element to appear as well as we have clicked on it
function waitAndClick(selector, currentPage){
    return new Promise(function(resolve, reject) {
            let waitForDialgueBoxAppearsPromise = currentPage.waitForSelector(selector, {visible : true});
            waitForDialgueBoxAppearsPromise.then(function (){//remove return
            let dialogueBoxClickPromise = currentPage.click(selector, {delay : 100});
            return dialogueBoxClickPromise;
        //when we get to know that our work is complete then call .then resolve and reject//
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject(err);
        })
        
    })
}

//if error occured qki ky pta aaj element hai kl na ho//
// like pepcoding site pe nados ka banner ht gya tha//
function handleifNotPresent(selector, currentPage){
    return new Promise(function(resolve, reject) {
        let waitAndClickp = waitAndClick(selector, currentPage);
        waitAndClickp.then(function() {
            resolve();
        })
        waitAndClickp.catch(function(err) {
            resolve();//not reject
        })
        
    })
}







//-----------another way to replace lines from 54 to 61----//
// .then(function() {
    //     let resoucesPageClickPromise = page.click(".site-nav-li>a[href='/resources']");
    //     return resoucesPageClickPromise;
    
    // })