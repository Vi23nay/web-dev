let fontSizeInput = document.querySelector(".font_size_input");
let fontFamilyInput = document.querySelector(".font_family_input");
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let leftAlign = document.querySelector(".left_align");
let centerAlign = document.querySelector(".center_align");
let rightAlign = document.querySelector(".right_align");
let justify = document.querySelector(".justify");

let isBold = false;
let isItalic = false;
let isUnderline = false;

// changing font size
fontSizeInput.addEventListener("change", function () {
    let fontSize = fontSizeInput.value;
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    // change fontSize property
    tobeChangedCell.style.fontSize = fontSize+"px";
})

// changing font fontFamily
fontFamilyInput.addEventListener("change", function () {
    let fontFamily = fontFamilyInput.value;
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    // change fontSize property
    tobeChangedCell.style.fontFamily = fontFamily;
})

bold.addEventListener("click", function() {
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    isBold =! isBold;
    if(isBold == true) {
        tobeChangedCell.style.fontWeight = 'bold';
        bold.classList.add("active");
    }
    else{
        tobeChangedCell.style.fontWeight = 'normal';
        bold.classList.remove("active");
    }
    
})
italic.addEventListener("click", function() {
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    isItalic =! isItalic;
    if(isItalic == true) {
        tobeChangedCell.style.fontStyle = 'italic';
        italic.classList.add("active");
    }else{
        tobeChangedCell.style.fontStyle = 'normal';
        italic.classList.remove("active");
    }
})
underline.addEventListener("click", function() {
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    isUnderline =! isUnderline;
    if(isUnderline == true) {
        tobeChangedCell.style.textDecoration = 'underline';
        underline.classList.add("active");
    }else{
        tobeChangedCell.style.textDecoration = 'none';
        underline.classList.remove("active");
    }
})
leftAlign.addEventListener("click", function() {
    leftAlign.classList.add("active");
    centerAlign.classList.remove("active");
    rightAlign.classList.remove("active");
    justify.classList.remove("active");
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    tobeChangedCell.style.textAlign = 'left';
})
centerAlign.addEventListener("click", function() {
    centerAlign.classList.add("active");
    leftAlign.classList.remove("active");
    rightAlign.classList.remove("active");
    justify.classList.remove("active");
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    tobeChangedCell.style.textAlign = 'center';
})
rightAlign.addEventListener("click", function() {
    rightAlign.classList.add("active");
    leftAlign.classList.remove("active");
    centerAlign.classList.remove("active");
    justify.classList.remove("active");
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    tobeChangedCell.style.textAlign = 'right';
})
justify.addEventListener("click", function() {
    justify.classList.add("active");
    leftAlign.classList.remove("active");
    centerAlign.classList.remove("active");
    rightAlign.classList.remove("active");
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    tobeChangedCell.style.textAlign = 'justify';
})