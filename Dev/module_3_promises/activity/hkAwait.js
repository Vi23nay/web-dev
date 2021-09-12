let puppeteer = require("puppeteer");

// let solutionCodeobj = require("./codes");
// let solution = solutionCodeobj.answers;

//good way -> short hand
let { answers } = require("./codes"); //pass exactly same key which u want to extract

let browserStartPromise = puppeteer.launch({
  headless: false,
  slowMo: 50,
  defaultViewport: null,

  args: ["--start-maximized", "--disable-notifications"],
});

// let codesObj = require("./codes");
// let codeTxt = codesObj.answers[0];
// console.log(codeTxt);

// let page, browser

(async function fn() {
  try {
    let browserObj = await browserStartPromise;
    console.log("Browser opened");
    let browser = browserObj;
    // new tab
    let page = await browserObj.newPage();
    await page.goto("https://www.google.com/");
    await page.type(".gLFyf.gsfi", "hackerrank");
    await page.keyboard.press("Enter", { delay: 100 });
    await waitAndClick(".LC20lb.DKV0Md", page);
    await waitAndClick("#menu-item-2887", page);
    let twoLogins = await page.$$(
      ".fl-module-content.fl-node-content .fl-button-text"
    );
    await twoLogins[1].click({ delay: 1000 });
    await page.waitForSelector("input[type='text']");
    await page.type("input[type='text']", "larej50480@drlatvia.com");
    await page.type("input[type='password']", "hackerrank");
    await page.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",
      { delay: 1000 }
    );
    await waitAndClick(".topic-name[data-automation='algorithms']", page);
    await waitAndClick(".checkbox-wrap>input[value='warmup']", page);
    let questionsArray = await page.$$(".js-track-click.challenge-list-item");
    for(let i = 1 ; i < questionsArray.length; i++){
        await questionSolver(page, questionsArray[i], answers[i - 1]);
           
    }
    
  } catch (err) {
    console.log("error" + err);
  }
})();


async function questionSolver(page, question, answer){
    try{
        await question.click();
        await waitAndClick(".monaco-editor.no-user-select.vs",page);
        await waitAndClick(".checkbox-input", page);
        await waitAndClick(".custominput", page);
        await page.type(".custominput", answer, { delay: 50 });
        await page.keyboard.down("Control");
        await page.keyboard.press("A");
        await page.keyboard.press("X");
        await page.keyboard.up("Control");
        await waitAndClick(".monaco-editor.no-user-select.vs",page);
        await page.keyboard.down("Control");
        await page.keyboard.press("A");
        await page.keyboard.press("V");
        await page.keyboard.up("Control");
        await waitAndClick(".hr-monaco-submit", page);
        await waitForSelector(".congrats-heading", {visible : true});
        await page.goBack();  

        // await page.goBack();
    }catch(err){
        console.log(err);
    }
}

async function waitAndClick(selector, currentPage) {
  try {
    await currentPage.waitForSelector(selector, { visible: true });
    await currentPage.click(selector, { delay: 500 });
  } catch (err) {
    console.log(err);
  }
}
