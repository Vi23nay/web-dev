let downloadBtn = document.querySelector(".save");
let openBtn = document.querySelector(".open");
let openInput = document.querySelector(".open_input");
downloadBtn.addEventListener("click", function (e) {
    //anchor create
    let a = document.createElement("a");
    //file put in anchor from db array
    // converting our file in string format
    var stringCode = encodeURIComponent(JSON.stringify(db));
    var dataStr = "data:text/json;charset=utf-8,"+stringCode;
    // console.log(dataStr);

    a.href = dataStr;
    a.download = "file.json";
    a.click();
    //anchor click
});

openBtn.addEventListener("click", function (e) {
    openInput.click();
})

openInput.addEventListener("change", function(){
    // get arrays of files user choosed
    let filesArr = openInput.files;
    console.log(filesArr.length);
    //Selecting first file
    let file = filesArr[0];
    // fileReader(Api) -> inbuilt in browser
    const reader = new FileReader();
    // read file as text
    reader.readAsText(file);
    reader.addEventListener("load", function(event){
        let jsonData = JSON.parse(event.target.result);
        db = jsonData;
        // console.log(db);
        setUI();
    })

});

function setUI() {
    for(let i = 0; i < 100; i++){
        for(let j = 0; j < 26; j++){
            let cellObject = db[i][j];
            let rid = i + 1;
            let cid = String.fromCharCode(65 + j);
            let tobeChangedCell = document.querySelector(`.grid .cell[rid='${rid}'][cid = '${cid}']`);
            tobeChangedCell.innerText = cellObject.content;
            tobeChangedCell.style.color = cellObject.color;
            tobeChangedCell.style.backgroundColor = cellObject.backgroundColor;
            tobeChangedCell.style.fontSize = cellObject.fontSize + "px";
            tobeChangedCell.style.fontFamily = cellObject.fontFamily;
            tobeChangedCell.style.textAlign = cellObject.textAlign;
            cellObject.isBold == true ? tobeChangedCell.style.fontWeight = "bold": tobeChangedCell.style.fontWeight = "normal";
            cellObject.isItalic == true ? tobeChangedCell.style.fontStyle = "italic": tobeChangedCell.style.fontStyle = "normal";
            cellObject.isUnderline == true ? tobeChangedCell.style.textDecoration = "underline": tobeChangedCell.style.textDecoration = "none";
        }
    }
}