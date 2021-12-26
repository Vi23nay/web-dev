//**********************************changing font size*******************************
fontSizeInput.addEventListener("change", function () {
    let fontSize = fontSizeInput.value;
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    // change fontSize property
    tobeChangedCell.style.fontSize = fontSize+"px";

    //database -> update
    db[cellRid - 1][cellCid.charCodeAt(0) - 65].fontSize = fontSize;
    // console.log(db);
})

//*******************************changing font fontFamily*********************************
fontFamilyInput.addEventListener("change", function () {
    let fontFamily = fontFamilyInput.value;
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    tobeChangedCell.style.fontFamily = fontFamily;

    //database -> update
    db[cellRid - 1][cellCid.charCodeAt(0) - 65].fontFamily = fontFamily;
})

//********************************bold - Italic - Underline**********************************
bold.addEventListener("click", function() {
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);


     db[cellRid - 1][cellCid.charCodeAt(0) - 65].isBold != db[cellRid - 1][cellCid.charCodeAt(0) - 65].isBold;
    // isBold =! isBold;
    if(db[cellRid - 1][cellCid.charCodeAt(0) - 65].isBold == false) {
        tobeChangedCell.style.fontWeight = 'bold';
        bold.classList.add("active");
        //database -> update
        db[cellRid - 1][cellCid.charCodeAt(0) - 65].isBold = true;
    }
    else{
        tobeChangedCell.style.fontWeight = 'normal';
        bold.classList.remove("active");
        db[cellRid - 1][cellCid.charCodeAt(0) - 65].isBold = false;
    }
    
})
italic.addEventListener("click", function() {
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);

    db[cellRid - 1][cellCid.charCodeAt(0) - 65].isItalic != db[cellRid - 1][cellCid.charCodeAt(0) - 65].isItalic;
    if(db[cellRid - 1][cellCid.charCodeAt(0) - 65].isItalic == false) {
        tobeChangedCell.style.fontStyle = 'italic';
        italic.classList.add("active");
        db[cellRid - 1][cellCid.charCodeAt(0) - 65].isItalic = true;
        
    }else{
        tobeChangedCell.style.fontStyle = 'normal';
        italic.classList.remove("active");
        db[cellRid - 1][cellCid.charCodeAt(0) - 65].isItalic = false;
    }
})
underline.addEventListener("click", function() {
    let cellAddress = addressInput.value;
    //   console.log(cellAddress);
    let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);

    db[cellRid - 1][cellCid.charCodeAt(0) - 65].isUnderline != db[cellRid - 1][cellCid.charCodeAt(0) - 65].isUnderline;

    if(db[cellRid - 1][cellCid.charCodeAt(0) - 65].isUnderline == false) {
        tobeChangedCell.style.textDecoration = 'underline';
        underline.classList.add("active");
        db[cellRid - 1][cellCid.charCodeAt(0) - 65].isUnderline = true;
    }else{
        tobeChangedCell.style.textDecoration = 'none';
        underline.classList.remove("active");
        db[cellRid - 1][cellCid.charCodeAt(0) - 65].isUnderline = false;
    }
})
//**********************************Alignments**************************
//Using bubbling concept
alignmentContainer.addEventListener("click", function(e){
    if(e.target !== e.currentTarget){
        console.log(e.target);
        let classListArr = e.target.classList;
        let alignmentTobe = classListArr[0];
        let cellAddress = addressInput.value;
        let { cellCid, cellRid } = getRidCidFromAddress(cellAddress);
        let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
        tobeChangedCell.style.textAlign = alignmentTobe;
        let alignments = alignmentContainer.children;
        for(let i = 0 ; i < alignments.length; i++){
                alignments[i].classList.remove("active");
        }
        e.target.classList.add("active"); 
        //database -> update
        db[cellRid - 1][cellCid.charCodeAt(0) - 65].textAlign = alignmentTobe;
        // console.log(db);
    }
})

//*********************************text color change*******************************
textColor.addEventListener("click", function(){
    textColorHidden.click();
})
textColorHidden.addEventListener("change", function(){
    let colorValue = textColorHidden.value;
    console.log(colorValue);
    let cellAddress = addressInput.value;
    let {cellRid, cellCid} = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    tobeChangedCell.style.color = colorValue;
    
    // console.log(cellRid)
    // console.log(cellCid.charCodeAt(0) - 65) -> column no.
    db[cellRid - 1][cellCid.charCodeAt(0) - 65].color = colorValue;
})

//**************************background color change****************************
bgColor.addEventListener("click", function(){
    //clicking hidden object with the help of DOM
    bgColorHidden.click();
})

bgColorHidden.addEventListener("change", function(){
    let colorValue = bgColorHidden.value;
    console.log(colorValue);
    let cellAddress = addressInput.value;
    let {cellRid, cellCid} = getRidCidFromAddress(cellAddress);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${cellRid}'][cid = '${cellCid}']`);
    tobeChangedCell.style.backgroundColor = colorValue;
    //db -> update
    db[cellRid - 1][cellCid.charCodeAt(0) - 65].backgroundColor = colorValue;
    // console.log(db);
})