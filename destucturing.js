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

// default destructing value
var [foo_9 = true] = [];
console.log(foo_9);                             // print true, because there is a default value

let [x_10, y_10 = "b"] = ["a"];
let [x_11, y_11 = "b"] = ["a", undefined];
let [x_12, y_12 = "b"] = ["a", null];
console.log(x_10, y_10);                        // print a b
console.log(x_11, y_11);                        // print a b, because an undefined value can trigger the default value
console.log(x_12, y_12);                        // print a null, because a null value is not an undefined value, and can not trigger the default value

let getA = () => {
    console.log("getA...");
    return "a";
};
let getB = () => {
    console.log("getB...");
    return "b";
};

let [a_13 = getA()] = ["a"];                    // print nothing
let [b_13 = getB()] = [];                       // print getB..., because the getB() function will be invoked while the default value is triggered.

// object destructing
let {foo_14, bar_14} = { foo_14: "a", bar_14: "b" };
console.log(foo_14, bar_14);                    // print a b

// object destructing and map to different name
let {foo_15: foo_16, bar_15: bar_16} = { foo_15: "a", bar_15: "b" };
console.log(foo_16, bar_16);                    // print a b

// object destructing nest
let obj_16 = {
    a: "a",
    b: [
        "c",
        {
            d: "d"
        }
    ]
}

let {b: [c_16, { d: d_16 }]} = obj_16;
console.log(d_16);                              // print d_16

let obj_17 = {
    a: {
        b: {
            c: {
                d: {
                    e: "e"
                }
            }
        }
    }
}

let {a: {b: {c: {d: {e: e_17}}}}} = obj_17;
console.log(e_17);                              // print e, and a, b, c, e are all pattern but not variable define

// object destructing default value
let {x_18 = 3} = {}
console.log(x_18);

let {x: x_19, y: y_19 = 5} = { x: 1 };
console.log(x_19, y_19);                        // print 1 5

let {x: x_20 = 1} = { x: undefined };
console.log(x_20);                              // print 1

// null value can not trigger the default value;
let {x: x_21 = 1} = { x: null };
console.log(x_21);                              // print null

// if the object destructing is failed, an undefined value will be setted
let {x: x_22} = {};
console.log(x_22);                              // print undefined

// if an nested object destructing is failed by miss an outter property, an error will be raised
let obj_23 = {
    a: {
        c: {
            d: "d"
        }
    }
}

// let {a: {b: {c: {d: d_23}}}} = obj_23;       // TypeError: Cannot match against "undefined" or "null".
// console.log(d_23);

// when destructing to assign to an exist variable, we have to use bracket
let a_23;
({ a: a_23 } = { a: 1 });
console.log(a_23);

// use destructing of object, we can reference function or property of object easyly.
let {log, sin, cos, E, PI} = Math;
console.log(log(E));                       // print 1;
console.log(sin(PI / 2));                  // print 1;
console.log(cos(0));                       // print 1;

// appendix, let we see what the MATH object has
console.log(Math["E"]);

for (let member in Math) {
    console.log(member, "->", Math[member]);
}

// array destrucing like object destructing
let {0: a_24, 1: b_24, 2: c_24} = [1, 2, 3];
console.log(a_24, b_24, c_24);              // print 1 2 3

// array destructing on string
let [a_25, b_25, c_25, d_25, e_25] = "hello";
console.log(a_25, b_25, c_25, d_25, e_25);

// object destructing on string
let {length: length_26} = "hello";
console.log(length_26);                     // print 5

// apply object destructing on number or boolean
let {toString} = 123;
console.log(toString);                      // print function 
console.log(toString.apply(123));           // print 123
console.log(Number.prototype.toString === toString);        // print true;

let {log: log_27} = console;
console.log(log_27);                        // print function 
log_27.call(null, 1, 2, 3);                 // print 1 2 3
log_27.apply(null, [1, 2 ,3]);              // print 1 2 3

let {toString: toString_28} = true;
console.log(toString_28 === Boolean.prototype.toString);    // print true;

// function arguments destructing 
function f_29([a, b, c]){
    return a + b + c;
}

console.log(f_29([1, 2, 3]));               // print 6
