let downloadBtn = document.querySelector(".save");
let openbtn = document.querySelector(".open");
downloadBtn.addEventListener("click", function (e) {
    //anchor create
    let a = document.createElement("a");
    //file put in anchor from db array
    var stringCode = encodeURIComponent(JSON.stringify(db));
    var dataStr = "data:text/json;charset=utf-8,"+stringCode;

    a.href = dataStr;
    a.download = "file.json";
    a.click();

    //anchor click
});
