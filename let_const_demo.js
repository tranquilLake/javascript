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
for (let i_2 = 0; i_2 < 10; i_2 ++) {
    a_2[i_2] = function () {
        console.log(i_2);
    }
}
a_2[6]();                               // "6" wile be printed, because i_2 exist only in one iteration in the for loop, and be closured in the returned function.

