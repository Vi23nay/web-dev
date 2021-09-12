
// No of videos : 500

// Average length of video : 6 minutes, 46 seconds

// Total length of playlist : 2 days, 8 hours, 29 minutes, 15 seconds

// At 1.25x : 1 day, 21 hours, 11 minutes, 24 seconds

// At 1.50x : 1 day, 13 hours, 39 minutes, 30 seconds

// At 1.75x : 1 day, 8 hours, 16 minutes, 42 seconds

// At 2.00x : 1 day, 4 hours, 14 minutes, 37 seconds

const puppeteer = require("puppeteer");
let xlsx = require("xlsx");
let fs = require("fs");
let path = require("path");
let page;

(async function fn() {
    try{
        let browser = await puppeteer.launch({
            headless : false,
            defaultViewport : null,
            args : ["--start-maximized"],
        })
        page = await browser.newPage();
        await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
        await page.waitForSelector("h1[id = 'title']", {visible : true})
        //first element
        let element = await page.$("h1[id = 'title']");
        let playlistName = await page.evaluate(
            function(element){
                return element.textContent;
            }, element);

        console.log("Name of the playlist : " , playlistName);
        
        
        let playlistDetails = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
        

        //***********total views*****************
        value = await page.evaluate(
            function(element){return element.textContent}, playlistDetails[6]
        )
        console.log("Total no. of views :" , value)

        //***************no. of videos******************
        value = await page.evaluate(
            function(element){return element.textContent}, playlistDetails[5]
        )
        console.log("Total no. of videos :" , value);

        let totalVideos = value.split(" ")[0].trim();
        // console.log(totalVideos);
        
        //******content being loaded after every 100 videos*********//
        let loadingAppearsCount = Math.floor(totalVideos / 100);
        for(let i = 0 ; i < loadingAppearsCount ; i++){
            //spinner selector //but spinner selector hides after loading new content 
            await page.click(".circle.style-scope.tp-yt-paper-spinner");
            await waitTillHTMLRendered(page);
            // console.log("new content loaded");
        }

        let videoNameArr = await page.$$("a[id = 'video-title']");

        let lastVideo = videoNameArr[videoNameArr.length - 1];
        // to reach on last video
        await page.evaluate(function(elem){
            elem.scrollIntoView();
        }, lastVideo);

        // console.log(videoNameArr.length);

        let arr = [];

        // list first 100 videos console.table => of video number,name, time
        let videoNumberArr = await page.$$("yt-formatted-string[id = 'index']");
        let timeDurationArr = await page.$$("span[id = 'text']");
        
        let timeInSeconds = 0;

        //XXXX-Don't use videoNameArr.length because live-streaming -> no time
        for(let i = 0 ; i < timeDurationArr.length ; i++){
            let videoName = await page.evaluate(
                function(element){return element.textContent;}, videoNameArr[i]);
                videoName = videoName.trim();

            let number = await page.evaluate(
                function (element){return element.textContent;}, videoNumberArr[i]);
                number = number.trim();
                
            let time = await page.evaluate(
                function (element){return element.textContent;}, timeDurationArr[i]);
                time = time.trim();
                        
                let timeArr = time.split(":");
                // console.log(timeArr);
                // console.log(timeArr.length);
                
                
                if(timeArr.length == 3){
                    timeInSeconds += Number(timeArr[0])*3600 + Number(timeArr[1])*60+ Number(timeArr[2]);
                }else{
                    timeInSeconds += Number(timeArr[0])*60+ Number(timeArr[1]);
                }
                arr.push({
                    number,
                    videoName,
                    time,
                });
                
                
            }
            // console.table(arr);
            let playlistLocation = path.join(__dirname, playlistName);
            // if(fs.existsSync(playlistLocation) == false){
            //     fs.mkdirSync(playlistLocation);
            // }

            const ws = xlsx.utils.json_to_sheet(arr);
            const wb = xlsx.utils.book_new(playlistName);
            xlsx.utils.book_append_sheet(wb, ws, playlistName);
            xlsx.writeFile(wb, playlistLocation+".xlsx");

            // console.log(timeInSeconds);

            console.log("Average length of video :")
            timeInActualFormat(timeInSeconds / videoNameArr.length);
            console.log("``````````````````````````````````");
            console.log("Total length of playlist :");
            timeInActualFormat(timeInSeconds);
            console.log("``````````````````````````````````");
            console.log("Total length of playlist at 1.25x :");
            timeInActualFormat(timeInSeconds / 1.25);
            console.log("``````````````````````````````````");
            console.log("Total length of playlist at 1.50x :");
            timeInActualFormat(timeInSeconds / 1.50);
            console.log("``````````````````````````````````");
            console.log("Total length of playlist at 1.75x :");
            timeInActualFormat(timeInSeconds / 1.75);
            console.log("``````````````````````````````````");
            console.log("Total length of playlist at 2.00x :");
            timeInActualFormat(timeInSeconds / 2.00);


            
                
            }catch(err){
        console.log(err);
    }
            



            
})();

const waitTillHTMLRendered = async (page, timeout = 10000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;

    while (checkCounts++ <= maxChecks) {
        let html = await page.content();
        let currentHTMLSize = html.length;

        let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

        // console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);

        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            // console.log("Page rendered fully..");
            break;
        }

        lastHTMLSize = currentHTMLSize;
        await page.waitForTimeout(checkDurationMsecs);
    }
};


function timeInActualFormat(timeInSeconds){
    timeInSeconds = Math.floor(timeInSeconds);
    let seconds = timeInSeconds % 60;
    let totalMins = Math.floor(timeInSeconds / 60); 
    let mins = totalMins % 60;
    let totalhrs = Math.floor(totalMins / 60);
    let hrs = totalhrs % 24;
    let days = Math.floor(totalhrs / 24);

    console.log(days+" days,", hrs+" hours,"+mins+" minutes,"+seconds+" seconds");
}