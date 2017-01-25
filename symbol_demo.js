// Symbol

// A Symbol is a unique value
// Symbol is a primative type of es6, just after Undefined, Null, Boolean, String, Number, Object

// show the type of a Symbol type
let s = Symbol();
console.log(typeof s);                                      // print Symbol

// we can not put Symbol() behind a new key word
//let s_2 = new Symbol();                                     // raise TypeError: Symbol is not a constructor
let str_2 = new String("hello world");
console.log(str_2);                                         // print [String: 'hello world']

let str_3 = "hello world";
console.log(str_3);                                         // print hello world

let str_4 = String("hello world");
console.log(str_4);                                         // print hello world

let num_5 = new Number(1.23);
console.log(num_5);                                         // print [Number: 1.23]

let num_6 = Number(1.23);
console.log(num_6);                                         // print 1.23

// Symbol(str)
// Global function Symbol() can receive a string parameter, to set the name of the Symbol

let sym_7 = Symbol("foo");
let sym_8 = Symbol("bar");

console.log(sym_7);                                         // print Symbol(foo);
console.log(sym_8);                                         // print Symbol(bar);

// if give a none string parameter to built-in function Symbol, Symbol will get string infomation of the object by using the toString function

let obj_9 = {
    toString: function () {
        return "hello";
    }
}

let sym_10 = Symbol(obj_9);
console.log(sym_10);                                        // print Symbol(hello);
