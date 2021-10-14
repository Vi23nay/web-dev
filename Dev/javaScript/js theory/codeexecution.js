// console.log(global);
// console.log(this);

// console.log(a);
// console.log(b);

// var a;
// var b;

// a = 10;
// b = [1,2,3,4,5];

// console.log(a);
// console.log(b);


// fn();
// function fn(){
//     console.log("Thanks for calling me");
// }

// fn();


//*****output */////////
// undefined
// undefined
// 10
// [ 1, 2, 3, 4, 5 ]
// Thanks for calling me
// Thanks for calling me





//***************************example - 2****************************//
//new execution create when function called

// console.log(a);

// var a;

// a = 100;

// console.log(a);

// fn();
// function fn(){
//     console.log("initial val of 'a' in fn" , a);
//     var a = 10;
//     console.log("final val of 'a' in fn", a);
// }

// fn();


//example - 03 when i didn't declare var inside function, then it take value from outsidee 

// console.log("line number 45" , a);
// var a;

// a = 10;

// console.log(a);

// fn();

// function fn(){
//     console.log("line number 70" , a);
//     // var a;
//     a++;
//     console.log("val of a", a);
// }

// fn();
// console.log("76" , a);

