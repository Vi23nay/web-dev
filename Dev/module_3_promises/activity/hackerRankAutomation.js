let puppeteer = require("puppeteer");
let browserStartPromise = puppeteer.launch({
    headless : false,
    // slowMo : 1000,
    defaultViewport : null,

    args : ["--start-maximized" , "--disable-notifications"],
});

let page, browser

browserStartPromise
    .then(function(browserObj){
    console.log("browser opened");
    // new tab
    browser = browserObj;
    let browserTabOpenPromise = browserObj.newPage();
    return browserTabOpenPromise;
}).then(function(newTab){//browserTabOpenPromise return value -> newTab
  page = newTab;
  console.log("new tab opened");
  let gPageOpenPromise = newTab.goto("https://www.google.com/");
  return gPageOpenPromise;
}).then(function(){
    console.log("google home page opened");
    let waitforTypingPromise = page.type(".gLFyf.gsfi", "hackerrank");
    return waitforTypingPromise;
}).then(function(){
    let enterWillBePressedPromise = page.keyboard.press('Enter', {delay : 100});
    return enterWillBePressedPromise;
}).then(function(){
    let waitForSearchResultsPromise = page.waitForSelector(".LC20lb.DKV0Md", {visible : true});
    console.log("Search results appeared");
    return waitForSearchResultsPromise;
}).then(function(){
    //click by mouse
    let elemClickPromise = page.click(".LC20lb.DKV0Md");
    console.log("hackerrank page opened");
    return elemClickPromise;
}).then(function(){
    let waitForLoginSelectorPromise = page.waitForSelector("#menu-item-2887", {visible : true});
    console.log("login shown");
    return waitForLoginSelectorPromise;
}).then(function(){
    let loginClickPromise = page.click("#menu-item-2887");
    console.log("login page opened");
    return loginClickPromise;
})
// .then(function(){
//     // let waitForDevelopersSelectorPromise = page.waitForSelector(".fl-button-text", {visible : true});
//     let waitForDevelopersSelectorArrayPromise = page.$$(".fl-button-text");//return list of all elems having that selector
//     console.log("developers login li's now available");
//     // console.log(waitForDevelopersSelectorArrayPromise.length);
//     return waitForDevelopersSelectorArrayPromise;
// }).then(function(waitForDevelopersSelectorArrayPromise){
//     let developersLoginClickedPromise = waitForDevelopersSelectorArrayPromise[2].click({delay : 100});
//     return developersLoginClickedPromise;
// })


.then(function(){
    // let waitForDevelopersSelectorPromise = page.waitForSelector(".fl-button-text", {visible : true});
    let waitForDevelopersSelectorArrayPromise = page.waitForSelector(".fl-button-wrap.fl-button-width-auto.fl-button-left>a");//return list of all elems having that selector
    console.log("developers login li's now available");
    // console.log(waitForDevelopersSelectorArrayPromise.length);
    return waitForDevelopersSelectorArrayPromise;
}).then(function(){
    let developersLoginClickedPromise = page.click(".fl-button-wrap.fl-button-width-auto.fl-button-left>a");
    return developersLoginClickedPromise;
}).then(function(){
    let waitForFinalLoginPagePromise = page.waitForSelector("input[type='text']");
    return waitForFinalLoginPagePromise;
}).then(function(){
    console.log("final login page opened");
    let waitForUsernameTypingPromise = page.type("input[type='text']", "larej50480@drlatvia.com" );
    return waitForUsernameTypingPromise;
}).then(function(){
    let passwordTypingPromise = page.type("input[type='password']", "hackerrank");
    return passwordTypingPromise;
}).then(function(){
    let loginClickedPromise = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", {delay : 500});
    return loginClickedPromise;
})



