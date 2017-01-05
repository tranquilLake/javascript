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
