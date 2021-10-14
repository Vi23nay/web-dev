function analyzedata(product, cb){
    setTimeout(function () {
        cb();//all executed
        cb();//all executess
        cb();//all executes
    }, 2000);
}

function promisifiedAnalyzeData(product){
    return new Promise(function cb(resolve, reject){
        setTimeout(function(){
            // reject(); -> agar ye phle ajaega toh y execute ho jaega or error de dega
            resolve();//only this one execute
            resolve();
            resolve();
            resolve();
        }, 2000);
        
    })
}

module.exports = {
    analyzedata,
    promisifiedAnalyzeData
}