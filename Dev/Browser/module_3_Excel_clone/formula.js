for(let i = 0; i < AllGridCells.length; i++) {
    AllGridCells[i].addEventListener("blur", function() {
        let content = AllGridCells[i].innerText;
        let address = addressInput.value;
        let {cellCid, cellRid} = getRidCidFromAddress(address);
        db[cellRid - 1][cellCid.charCodeAt(0) - 65].content = content;

    })
}
