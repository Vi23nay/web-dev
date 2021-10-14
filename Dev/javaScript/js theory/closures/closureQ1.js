// function outer() {
//     let arrFn = [];
//     for(var i = 0; i < 3; i++){
//         arrFn.push(function fn() {//only pushing function not calling it
//             console.log(i);
//         })
//     }
//     return arrFn;
    
// }

// let arrFno = outer();
// arrFno[0]();
// arrFno[1]();
// arrFno[2]();

//output -> 3,3,3


//***************************************************************************** */
//to get output 0,1,2 

// function outer() {
//         let arrFn = [];
//         for(var i = 0; i < 3; i++){
//             arrFn.push(function fn() {
//                 console.log(i);
//             } () )//call here
//         }
//         return arrFn;
        
//     }


// outer();


//********************************************************************/
// 3rd way//
//similar to way 1//

// function outer() {
//     let arrFn = [];
//     for(var i = 0; i < 3; i++){
//         function outerFn() {
//             var j = i;
//             return function fn() {
//                 console.log(j,i);
//             }
//         }
//         arrFn.push(outerFn())
//     }
//     return arrFn;
    
// }

// let arrFno = outer();
// arrFno[0]();//here 0,1,2 have addresses of functions inside arrFno
// arrFno[1]();
// arrFno[2]();


// *******************************************************************//

//4th way //
//exactly similar to 1st way// 
//but insteead of using var we use let here

// function outer() {
//     let arrFn = [];
//     //block1, block2, block3
//     for(let i = 0; i < 3; i++){//change here
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
    
// }

// let arrFno = outer();
// arrFno[0]();
// arrFno[1]();
// arrFno[2]();


//similar to above one
//bs let ko bhar bna rhe h pr output dekhnaa

// ab ek hi block bnega or usme hi change hoga
// function outer() {
//     let arrFn = [];
//     //block1, block2, block3
//     let i = 0;
//     for(; i < 3; i++){//change here
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
    
// }

// let arrFno = outer();
// arrFno[0]();
// arrFno[1]();
// arrFno[2]();


//********************************************************************* */
//one more way to form closure
for( var i = 0; i < 3; i++){
    setTimeout(function() {
        console.log(i);
    }, 1000);
}



//try these questions
//https://dmitripavlutin.com/javascript-closures-interview-questions/
