// let is in block-level scope.
// so out of the block, it is not allowed to access a let variable.
{
    let a = 10;
    var b = 11;
}
// console.log(a);
console.log(b);


// for loop is pretty appropriate to use let variable.
for (let i = 0; i < 10; i++)
    console.log(i);


// var variables exists in the environment scope or function scope
var a_1 = [];
for (var i_1 = 0; i_1 < 10; i_1++) {
    a_1[i_1] = function () {
        console.log(i_1);
    }
}
a_1[6]();                               // “10” will be printed, because i_1 has bean setted to 10, and will exist until the script exits.


// let variable exist only in the block where it is defined
let a_2 = [];
for (let i_2 = 0; i_2 < 10; i_2++) {
    a_2[i_2] = function () {
        console.log(i_2);
    }
}
a_2[6]();                               // "6" wile be printed, because i_2 exist only in one iteration in the for loop, and be closured in the returned function.


// var variable will be promoted
// let variable will not be promoted

console.log(foo_1);                     // print "undefined", because the var variable foo_1 will be promoted to be an environment variable, but not assigned until next line.
var foo_1 = 1;

// console.log(bar_1);                  // ReferenceError, because the let variable will not be promoted, and will only be dynamically added on next line.
let bar_1 = 2;


// let variable has not promotion
// but let variable has a temporal dead zone
let tmp_1 = 1;

if (true) {
    // console.log(tmp_1);              // ReferenceError, while defining a let variable in a block,
    let tmp_1 = 2;                      // than all variable have the same name refer to the let variable,
    // and will only be dynamically added on the defining line.
}

// let variable is not allowed to be defined twice in a block
var f_1 = function () {
    var a = 1;
    // let a = 1;                       // SyntaxError, Identifier has bean declared
}

var f_2 = function () {
    let a = 1;
    // let a = 1;                       // SyntaxError, Identifier has bean declared
}

// why we need a block scope
var tmp_3 = new Date();

function f_3() {
    console.log(tmp_3);
    if (false) {
        var tmp_3 = "hello world";
    }
}

f_3();                                  // print "undefined", because tmp_3 in if block while be promoted before console.log statement.

for (var i_4 = 0; i_4 < 5; i_4++) {
    // console.log(i_4);
}

console.log(i_4);                       // printing "5", which means that the loop variable has leaked.

// variable in inner block will not effect variable in outter block
var f_4 = function () {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);
}

f_4();                                  // print "5", just like there is not a inner block.

// blocks can nest
{
    let a = 1;
    {
        let a = 2;
        {
            let a = 3;
            {
                let a = 4;
                {
                    let a = 5;
                }
            }
        }
    }
}

// we can define function in a block after es6
if (true) {
    function f_5() {
        console.log("f_5");
    }
}

// defining function in a block is actually just defining a let function variable in the block.

if (true) {
    function f_6() {
        console.log("outter");
    }

    if (true) {
        function f_6() {
            console.log("inner");
        }
    }

    f_6();                                  // print "outer", because inner function is only avalible in inner block.
}

// const value can not be assigned after declared
const PI = 3.141592654;
console.log(PI);
// PI = 3.15;                               // TypeError

// const value of object only promise that the reference of object will not change
const foo_7 = {};
foo_7.prop = 1;                             // can assign properties of a const value
console.log(foo_7.prop);
// foo_7 = {};                              // can not assign

const foo_8 = [];
foo_8.push(1);
console.log(foo_8.length);
console.log(foo_8[0]);

// Object.freeze()
let foo_9 = {
    "a": 1,
    "b": 2
}

const foo_10 = Object.freeze(foo_9);
foo_10.a = 2;
foo_10.b = 1;
console.log("freeze object");
console.log(foo_10.a);                      // print "1"
console.log(foo_10.b);                      // print "2"


// constantize function

let obj_11 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
}

console.log("test for in");
for (let e in obj_11) {
    console.log(e);
}

console.log("test for of");
// for (let e of obj_11) {                  // TypeError: is not a function
//    console.log(e);
// }

let constantize = (obj) => {
    console.log(`freeze obj: ${obj}`);
    Object.freeze(obj);
    for (let key in obj) {
        if (typeof obj[key] === "object")
            constantize(obj[key]);
    }
}

let constantize_1 = (obj) => {
    console.log(`freeze obj: ${obj}`);
    Object.freeze(obj);
    Object.keys(obj).forEach((it => {
        if (typeof it === "object")
            constantize_1(obj[it]);
    }))
}
constantize(obj_11);


