// Hoisting //

// getName();
// console.log(x);
// console.log(getName);


// var x = 7;

// function getName() {
//     console.log("namaste");
// }



// Variable Environment //

// var x = 1;
// a();
// b();
// console.log(x);

// function a () {
//     var x = 10;
//     console.log(x);
// }

// function b () {
//     var x = 100;
//     console.log(x);
// }


// Global Space// 

// var a = 10;

// function b() {
//     var x = 10;
// }

// console.log(window.a);
// console.log(a);
// console.log(this.a);


// lexical environment //

// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// a();


// let and const //

//temporal dead zone//
// console.log(a);
// // error=> cannot access a before initialization//
// let a = 10;

// var b = 100;


// Block Scope //
 
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// Shadowing //

// 1. var //
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

// 2. let //

// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);

// 3.const //

// const c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(c);

// 4. Function //

// const c = 100;
// function x() {
//     const c = 30;
//     console.log(c);
// }
// x();
// console.log(c);

// Illegal Shadowing //


// Closures //
//  function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
//  }

// x();

// function x () {
//     var a = 10;
//      function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
//     // return function y() {
//     //     console.log(a);
//     // }
// }

// var z = x();
// console.log(z)
// z();


// function z() {
//     var b = 900;
//     function x () {
//         var a = 10;
//          function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// Function Statement //
// function a() {
//     console.log("a called");
// }

// Function Expression //
// var b = function () {
//     console.log("b called");
// }

// Anonymous Function //
//  function () {

//  }

 // Named Function Expression //
//  var b = function xyz() {
//     console.log("hi")
//  }

 // Difference between parameters and arguments //
//  function k(param1, param2) {
//     console.log(param1, param2)
//  }

//  k(1, 2) // arguments//

 // First Class Functions // First Class Citizens
//  The ability of functions to be used 
//  as values and can be passed as an 
//  argument to another function and can be 
//  returned from the functions is called 
//  first class function in javascript.

// Arrow Function //
// let a = (a, b) => a*b;

// console.log("start");

// setTimeout(function cb() {
//     console.log("callback");
// }, 5000);

// console.log("stop");

// High Order functions //

// const radius = [3, 1, 2, 4];

// const area = function(radius) {
//     return Math.PI * radius * radius;
// }

// const circumference = function(radius) {
//     return 2 * Math.PI * radius;
// }

// const diameter = function(radius) {
//     return 2 * radius;
// }

// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
// const calculateCircum = function (radius) {
//     const output = [];
//     for(i = 0; i < radius.length; i++) {
//         outCircum.push(2 * (Math.PI * radius[i]));
//     }
//     return output;
// }

// console.log(calculateCircum(radius));

// map function //
// Array.prototype.calculate = function (logic) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[i]));
//     }
//     return output;
// };

// console.log(radius.map(area));

// Map function /

// const arr = [2, 3, 4, 5];

// function double(x) {
//     return 2 * x;
// }

// const output = arr.map(double);
// console.log(output);

// or//

// const output = arr.map(function double(x) {
//     return 2 * x;
// })
// console.log(output);

// or //

// const output = arr.map((x) => 2 * x)
// console.log(output);

// const arr = [2, 4, 6, 8];

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map((x) => x.toString(2))

// console.log(output);

// Filter odd values //

// const arr = [2, 1, 5, 4, 6];

// const output = arr.filter((x) => x % 2);

// console.log(output);

// Filter even values //

// const arr = [2, 1, 5, 4, 6];

// const output = arr.filter((x) => x % 2 === 0);

// console.log(output);
