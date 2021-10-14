//lib -> analyze data
let libObj = require("./lib");
let amount = 100;
let priceOfProduct = 20;
//code execution

// libObj.analyzedata("Tv", cb)
let promiseP = libObj.promisifiedAnalyzeData("Tv");
promiseP.then(cb);
function cb(){
    //credit card bill payment
    amount = amount - priceOfProduct;
    console.log(amount);
}


// yaha pr jb libObj.analyzedata wala function chalega toh uska control libObj.js wali file m jaega or wha pr cb()
//  jitni bhi baar call ho rkha hoga main m code utni baar chal jaega
// but
// jb promisefiedanalyzedata wala chalega toh wha pr chahe kitni bhi baar likha ho resolve() ya rejects() pr call 
// ek hi baar hoga jo b sbse phle likha hoga chahe resolve() likha ho toh wo ek baar chal jaega or agr reject() 
// likha hoga toh wo ek baar chal jaega baki neeche jitni bhi baar likhe ho hume koi dikkat nahi
// major GYST yhi hai ki koi code m chedkhani ni kr paega jaise hume credit card ka payment krni ho or 
// analyze data m toh koi b chedkhani kr sskta h pr promisified wale m chedkhani n krne ka koii faeda nahi 