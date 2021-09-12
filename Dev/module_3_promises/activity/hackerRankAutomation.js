let puppeteer = require("puppeteer");

// let solutionCodeobj = require("./codes");
// let solution = solutionCodeobj.answers;

//good way -> short hand
let {answers} = require("./codes");//pass exactly same key which u want to extract

let browserStartPromise = puppeteer.launch({
    headless: false,
    slowMo: 50,
    defaultViewport: null,

    args: ["--start-maximized", "--disable-notifications"],
});

// let codesObj = require("./codes");
// let codeTxt = codesObj.answers[0];
// console.log(codeTxt);

let page, browser

browserStartPromise
    .then(function (browserObj) {
        console.log("browser opened");
        // new tab
        browser = browserObj;
        let browserTabOpenPromise = browserObj.newPage();
        return browserTabOpenPromise;
    }).then(function (newTab) {//browserTabOpenPromise return value -> newTab
        page = newTab;
        console.log("new tab opened");
        let gPageOpenPromise = newTab.goto("https://www.google.com/");
        return gPageOpenPromise;
    }).then(function () {
        console.log("google home page opened");
        let waitforTypingPromise = page.type(".gLFyf.gsfi", "hackerrank");
        return waitforTypingPromise;
    }).then(function () {
        let enterWillBePressedPromise = page.keyboard.press('Enter', { delay: 100 });
        return enterWillBePressedPromise;
    }).then(function () {
        let waitForSearchResultsPromise = page.waitForSelector(".LC20lb.DKV0Md", { visible: true });
        console.log("Search results appeared");
        return waitForSearchResultsPromise;
    }).then(function () {
        //click by mouse
        let elemClickPromise = page.click(".LC20lb.DKV0Md");
        console.log("hackerrank page opened");
        return elemClickPromise;
    })

    // // .then(function(){
    // //     let waitForLoginSelectorPromise = page.waitForSelector("#menu-item-2887", {visible : true});
    // //     console.log("login shown");
    // //     return waitForLoginSelectorPromise;
    // // }).then(function(){
    // //     let loginClickPromise = page.click("#menu-item-2887");
    // //     console.log("login page opened");
    // //     return loginClickPromise;
    // // })

    .then(function () {
        let waitForLoginSelectorPromise = waitAndClick("#menu-item-2887", page);
        return waitForLoginSelectorPromise;
    })


    // .then(function(){
    //     // let waitForDevelopersSelectorPromise = page.waitForSelector(".fl-button-text", {visible : true});
    //     let waitForDevelopersSelectorArrayPromise = page.$$(".fl-button-text");//return list of all elems having that selector
    //     console.log("developers login li's now available");
    //     // console.log(waitForDevelopersSelectorArrayPromise.length);
    //     return waitForDevelopersSelectorArrayPromise;
    // }).then(function(waitForDevelopersSelectorArrayP){
    //     let developersLoginClickedPromise = waitForDevelopersSelectorArrayP[1].click({delay : 1000});
    //     return developersLoginClickedPromise;
    // })


    .then(function () {
        // let waitForDevelopersSelectorPromise = page.waitForSelector(".fl-button-text", {visible : true});
        let waitForDevelopersSelectorPromise = page.waitForSelector(".fl-button-wrap.fl-button-width-auto.fl-button-left>a");//return list of all elems having that selector
        console.log("developers login li's now available");
        // console.log(waitForDevelopersSelectorArrayPromise.length);
        return waitForDevelopersSelectorPromise;
    }).then(function () {
        let developersLoginClickedPromise = page.click(".fl-button-wrap.fl-button-width-auto.fl-button-left>a");
        return developersLoginClickedPromise;
    }).then(function () {
        let waitForFinalLoginPagePromise = page.waitForSelector("input[type='text']");
        return waitForFinalLoginPagePromise;
    }).then(function () {
        console.log("final login page opened");
        let waitForUsernameTypingPromise = page.type("input[type='text']", "larej50480@drlatvia.com");
        return waitForUsernameTypingPromise;
    }).then(function () {
        let passwordTypingPromise = page.type("input[type='password']", "hackerrank");
        return passwordTypingPromise;
    }).then(function () {
        let loginClickedPromise = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", { delay: 1000 });
        return loginClickedPromise;
    }).then(function () {
        let algorithmOptionClickPromise = waitAndClick(".topic-name[data-automation='algorithms']", page);
        return algorithmOptionClickPromise;
    }).then(function () {
        console.log("algorithm page opened");
        let clickWarmupPromise = waitAndClick(".checkbox-wrap>input[value='warmup']", page);
        return clickWarmupPromise;
    }).then(function () {
        console.log("warmup pressed");
        let questionsArrayPromise = page.$$(".js-track-click.challenge-list-item");
        return questionsArrayPromise;//return array of question
    }).then(function (questionsArray) {
        return questionSolver(page, questionsArray[1], answers);
    })




function questionSolver(page, question, answer) {
    return new Promise (function (resolve, reject) {
        let questionWillBeClickedPromise = question.click();
        questionWillBeClickedPromise
            .then(function () {
                //click
                // code type 
                // ctrl A+ ctrl x
                // click on editor 
                // ctrl A+ctrl v
                //  reached to editor
                //here we need to first focus on editor only then we can use inputbox to use as a clipboard to paste our code because in pages data will take some time to load->>>React concept 
                let editorIsInFocusPromise = waitAndClick(".monaco-editor.no-user-select.vs", page);
                return editorIsInFocusPromise;
            }).then(function () {
                let inputCheckBoxClicked = waitAndClick(".checkbox-input", page);
                return inputCheckBoxClicked;
            }).then(function () {
                return waitAndClick(".custominput", page);
            }).then(function () {
                return page.type(".custominput", answer, { delay: 50 });
            }).then(function () {
                let ctrlIsPressedPromise = page.keyboard.down("Control");
                return ctrlIsPressedPromise;
            }).then(function () {
                let AisPressedPromise = page.keyboard.press("A");
                return AisPressedPromise;
            }).then(function () {
                let xIspressedPromise = page.keyboard.press("X");
                return xIspressedPromise;
            }).then(function () {
                let ctrlIsReleasedPromise = page.keyboard.up("Control");
                return ctrlIsReleasedPromise;
            }).then(function () {
                let insideEditorPromise = waitAndClick(".monaco-editor.no-user-select.vs", page);
                return insideEditorPromise;
            }).then(function () {
                let ctrlIsPressedPromise = page.keyboard.down("Control");
                return ctrlIsPressedPromise;
            }).then(function () {
                let AisPressedPromise = page.keyboard.press("A");
                return AisPressedPromise;
            }).then(function(){
                let VisPressedPromise = page.keyboard.press("V");
                return VisPressedPromise;
            }).then(function () {
                let ctrlIsReleasedPromise = page.keyboard.up("Control");
                return ctrlIsReleasedPromise;
            }).then(function(){
                let submitIsClickedPromise = waitAndClick(".hr-monaco-submit", page);
                return submitIsClickedPromise;
            })
        })

    }
        








































    // .then(function(questionsArray){
    //     for(let i = 1 ; i < questionsArray.length; i++){
    //             let questionSolvePagePromise = questionsArray[i].click({delay:100});
    //             return questionSolvePagePromise;
    //     }
    // })
    //         .then(function(){
    //             let insideEditorPromise = waitAndClick(".monaco-editor.no-user-select.vs", page);
    //             return insideEditorPromise;
    //         }).then(function(){
    //             let ctrlIspPressedPromise = page.keyboard.down("Control");
    //             return ctrlIspPressedPromise;
    //         }).then(function(){
    //             let AisPressedPromise = page.keyboard.press("A", {delay : 100});
    //             return AisPressedPromise;
    //         }).then(function(){
    //             let xIspressedPromise = page.keyboard.press("X", {delay : 100});
    //             return xIspressedPromise;
    //         }).then(function(){
    //             let ctrlIsReleasedPromise = page.keyboard.up("Control");
    //             return ctrlIsReleasedPromise;
    //         }).then(function(){
    //             //auto complete feature of vscode -> monaco editor
    //             let codeIsTypingPromise = page.keyboard.type(solution, {delay : 50});
    //             return codeIsTypingPromise;
    //         }).then(function(){
    //             let codesubmitClickPromise = waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled", page);
    //             return codesubmitClickPromise; 
    //         }).then(function(){
    //             let helo = page.goBack();
    //             return helo;
    //         })
            
        
    
    
    
    
    
    
    
    
    
    
    




function waitAndClick(selector, currentPage) {
            return new Promise(function (resolve, reject) {
                let waitForLoginSelectorPromise = currentPage.waitForSelector(selector, { visible: true });
                // console.log("login shown");
                // XXXX return XXX
                waitForLoginSelectorPromise.then(function () {
                    let loginClickPromise = currentPage.click(selector, { delay: 500 });
                    // console.log("login page opened");
                    return loginClickPromise;

                }).then(function () {
                    resolve();
                }).catch(function (err) {
                    reject(err);
                })

            })

        }
