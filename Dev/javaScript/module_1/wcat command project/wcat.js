let fs = require("fs");


let inputArr = process.argv.slice(2);
let optionArr = [];
let filesArr = [];
for(let i = 0 ; i < inputArr.length ; i++){
    let firstchar = inputArr[i].charAt(0);
    // let secondchar = inputArr[i].charAt(1);
    if(firstchar == '-'){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}
console.log(optionArr[0]);
// console.log(inputArr[0]);


let singlefileobj = require("./command/singlefile");


//************checking whether path exists or not******************//
for(let i = 0 ; i < filesArr.length ; i++){
    if(fs.existsSync(filesArr[i]) == false){
        console.log("path doesn't exists!!!");
        return;
    }
}

// let acceptedCommands = ['-s','','-n','-b'];
//***********************check whether command is correct or not **********************//
for(let cmd = 0 ; cmd < optionArr.length ; cmd++){
    if(optionArr[cmd] == '-s' || optionArr[cmd] == '-n' || optionArr[cmd] == '-b' ||optionArr[cmd] == ''){

    }else{
        console.log("command doesn't exists!!!! please enter valid command!!!!");
        return;
    }
}

//handling 1st and 2nd command//
 if(optionArr[0] == undefined){
    for(let i = 0 ; i < filesArr.length ; i++){
        singlefileobj.command1fxn(filesArr[i]);
    }
}


//*****************************reading files **********************************************//
let content = "";
for(let i = 0 ; i < filesArr.length ; i++){
// console.log();
content = content+fs.readFileSync(filesArr[i])+"\n";
}

//****************content -> Array of content */////////////////////////////////////////
let contentArr = content.split("\n")


//********************************handling 3rd command -s *********************************//
let isSpresent = optionArr.includes("-s");
if(isSpresent){
    
    
    // let contentArr = content.split("\n\r");
    let ans = "";
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] == ''){

        }else{
            ans = ans + "\n" + contentArr[i];
        }
    }
    
    
    // let ans = contentArr.join('');
    console.log(ans);
    
} 

///////////handling edge case of b and n command/////////////////////////
let isBpresent = optionArr.includes("-b");
let isNpresent = optionArr.includes("-n");

if(isBpresent){
    if(isNpresent){
        let Bidx = optionArr.indexOf("-b");
        let Nidx = optionArr.indexOf("-n");
        if(Nidx < Bidx){
            //n before b
            ncommand();
        }else{
            // b before n
            bcommand();
        }
    }else{
        bcommand();
    }
    
    
}else if(isNpresent){
    ncommand();
}



//***************handling -b command******************//

function bcommand(){

    // let content = "";
    // for(let file = 0 ; file < filesArr.length ; file++){
    //     content = content + fs.readFileSync(filesArr[file]) + "\n";
    // }
    // let contentArr = content.split("\n");
    // console.log(contentArr);

    let num = 1;
    for(let i = 0 ; i < contentArr.length - 1;i++){
        if(contentArr[i] != '\r'){
            contentArr[i] = num + ". "+ contentArr[i];
            console.log(contentArr[i]);
            num++;
        }
        else{
            console.log();
        }
        
    }
    // ans = "";
    // for(let i=0 ; i < contentArr.length;i++){
    //     ans = ans + contentArr[i] + "\n";

    // }
    // console.log(ans);
}



//*********************handling -n command******************//

function ncommand(){
    // let content = "";
    // for(let file = 0 ; file < filesArr.length; file++){
        
    //     content = content + fs.readFileSync(filesArr[file]) + "\n";
    // }

    // let contentArr = content.split("\n");
    // console.log(contentArr);
    let num = 1;
    let ans ="";
    for(let i=0 ; i < contentArr.length - 1 ; i++){
       
        contentArr[i] = num + ". " +contentArr[i];
        console.log(contentArr[i]);
        num++;
    }
}




    






