let fontSizeInput = document.querySelector(".font_size_input");
let fontFamilyInput = document.querySelector(".font_family_input");
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let alignmentContainer = document.querySelector(".alignment_container");
let alignmentContainerElements = document.querySelectorAll(".alignment_container .material-icons");
let textColor = document.querySelector(".textColorMain");
let textColorHidden = document.querySelector(".textColorH");
let bgColor = document.querySelector(".bgColorMain");
let bgColorHidden = document.querySelector(".backgroundColorH");
let topRow = document.querySelector(".top_row");
let grid = document.querySelector(".grid");
let addressInput = document.querySelector(".address_input");
//top row creation
for (let i = 0; i < 26; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    // div.innerText = "A";//both works
    div.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(div);
}
// left col cells creation
let leftCol = document.querySelector(".left_col");
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.innerText = i;
    leftCol.appendChild(div);
}

//grid creation-> 2d array
for(let i = 0; i < 100; i++){
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for(let j = 0; j < 26; j++){
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        // div.contentEditable = true;also work
        div.setAttribute("contentEditable", "true");
        // for every cell identification
        div.setAttribute("rID", i+1);
        div.setAttribute("cID", String.fromCharCode(65 + j));
        // div.innerText = String.fromCharCode(65 + j) + i;
        row.appendChild(div);
        // my way -> also correct
        //##to get row and column of selected cell in addressInput;
        // div.addEventListener("click", function(e) {
        //     let rowId = div.getAttribute("rID");
        //     let colId = div.getAttribute("cID");
        //     let fullId = colId + rowId;
        //     // addressInput.setAttribute('type', fullId);
        //     // addressInput.textContent = fullId;//not working in case of input element
        //     addressInput.value = fullId;


        // })
    }
    grid.appendChild(row);
}
/***************************Database********************************/ 
let db = [];
for(let i = 0; i < 100; i++){
    let rowArr = [];
    for(let j = 0; j < 26; j++){
        let cellObject = {
            content : "",
            color : "black",
            backgroundColor : "white",
            fontSize : 14,
            fontFamily : "Arial",
            textAlign : "left",
            isItalic : false,
            isUnderline : false,
            isBold : false,
        }
        rowArr.push(cellObject);
    }
    db.push(rowArr);
}


//##to get row and column of selected cell in addressInput;
// if i click on any of the cells
// then i will get the address
// print -> formula bar
let AllGridCells = document.querySelectorAll(".grid .cell");
for(let i = 0; i < AllGridCells.length; i++){
    AllGridCells[i].addEventListener("click", function() {
        // previous cell adddress
        let prevAddress = addressInput.value;
        if(prevAddress != ""){
            let {cellCid,cellRid} = getRidCidFromAddress(prevAddress);
            // console.log(prevCid, prevRid);
            let prevCell =  document.querySelector(`.grid .cell[rid='${cellRid}'][cid='${cellCid}']`);
            prevCell.style.border = "0.1px solid rgb(158, 157, 157)";//removing outline from prev cell
        }

        let rowId = AllGridCells[i].getAttribute("rID");
        let colId = AllGridCells[i].getAttribute("cID");
        addressInput.value = colId + rowId;
        let  cCell = AllGridCells[i];
        cCell.style.border = "2px solid blue";//giving outline to current cell

        // db[rowId - 1][colId.charCodeAt(0) - 65].content = AllGridCells[i].innerText;

        //*****************************************2 WAY BINDING********************************
        
        let cellobj = db[rowId - 1][colId.charCodeAt(0) - 65];
        fontSizeInput.value = cellobj.fontSize

        fontFamilyInput.value = cellobj.fontFamily;

        cellobj.isBold == true ? bold.classList.add("active") : bold.classList.remove("active");
        cellobj.isItalic == true ? italic.classList.add("active") : italic.classList.remove("active");
        cellobj.isUnderline == true ? underline.classList.add("active") : underline.classList.remove("active");

        textColor.style.color = cellobj.color;
        bgColor.style.color = cellobj.backgroundColor;

        let alignment = cellobj.textAlign;
        for(let i = 0; i < alignmentContainerElements.length; i++){
            alignmentContainerElements[i].classList.remove("active");
        }

        for(let i = 0; i < alignmentContainerElements.length; i++){
            if(alignmentContainerElements[i].classList.contains(alignment)){
                alignmentContainerElements[i].classList.add("active");
            }
        }

    })
}



//####on startup -> addressinput = A1 and A1 cell -> selected cell
let A1cell = document.querySelector(".grid .cell[rid = '1'][cid = 'A']");
A1cell.click();
A1cell.focus();//to enable writing on reload

// A1grid.style.border = "2px solid green";

function getRidCidFromAddress(address){
    // A-Z, 1-100
    // console.log(address.substring(0,1));
    // console.log(address.substring(1));
    let rId = address.substring(1);
    let cId = address.substring(0,1);
    return {cellCid:cId, cellRid:rId};
}