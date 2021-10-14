function outer() {
    let outerVal = 10;
    console.log("Outer function called ");
    return function inner(secondNum){//returning function 
        console.log("Inner function called ");
        return outerVal + secondNum;
    }
}


let innerFnRef = outer();
console.log("Betweeen");

let rVal = innerFnRef(20);
console.log("rVal", rVal);