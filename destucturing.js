// old style
var a_1 = 3;
var b_1 = 2;
var c_1 = 1;
console.log([a_1, b_1, c_1]);

// new style
let [a_2, b_2, c_2] = [1, 2, 3];
console.log([a_2, b_2, c_2]);

let [foo_3, [[bar_3], baz_3]] = [1, [[2], 3]];
console.log([foo_3, bar_3, baz_3]);

let [, , third_4] = [1, 2, 3];
console.log(third_4);

let [head, ...tail] = [1, 2, 3, 4];
console.log(head);
console.log(tail);

let [a_5, b_5] = [1];
console.log(a_5);
console.log(b_5);                               // print "undefined", no error.


// first 2
let [a_6, b_6] = [1, 2, 3];
console.log(a_6, b_6);                          // print 1 2

// get value as far as possible
let [a_7, [b_7], d_7] = [1, [2, 3], 4];
console.log(a_7, b_7, d_7);                     // print 1 2 4, with no error

// destructing on uniterable will raise error
// let [foo_8] = 1;
// let [foo_9] = false;
// let [foo_10] = NaN;
// let [foo_11] = undefined;
// let [foo_12] = null;
// let [foo_13] = {};

// we can destructe a set
let [a_8, b_8, c_8] = new Set(["a", "b", "c"]);

console.log(a_8, b_8, c_8);                     // print a b c

// generator
function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [fib_0, fib_1, fib_2, fib_3, fib_4, fib_5, fib_6] = fibs();
console.log(fib_0, fib_1, fib_2,                // print 0 1 1 2 3 5 8
    fib_3, fib_4, fib_5, fib_6);
