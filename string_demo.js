let s_1 = "\u0061";                     // char code
console.log(s_1);

let s_2 = "\uD842\uDFB7";               // char using 3 bytes
console.log(s_2);

let s_3 = "\u{20bb7}";                  // char using 3 bytes, can be put in a pair of brace.
console.log(s_3);

let s_4 = "\u{41}\u{42}\u{43}";         // char code in a pair of brace.
console.log(s_4);

// when we have a 3-byte character,
// string.charAt() and string.charCodeAt can not handle it
// but after es6, we can use string.codePointAt() to get the corrent char code
let s = "𠮷";
console.log(s.length);                  // print 2;
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));           // print 55362
console.log(s.charCodeAt(1));           // print 57271

console.log(s.codePointAt(0));          // bingo, print 134071
console.log(                            // bingo, print 20bb7
    s.codePointAt(0).toString(16));

// function to check charater is 32-bit
function is32bit(c) {
    return c.codePointAt(0) > 0xffff;
}

console.log(is32bit("𠮷"));             // print true
console.log(is32bit("a"));              // print false

// String.fromCharCode() function can not handle 32-bit char code
let s_5 = String.fromCharCode(0x20BB7);
console.log(s_5);                       // can not print 𠮷

// after es6 we can use String.fromCodePoint() to handle 32-bit char code
let s_6 = String.fromCodePoint(0x20bb7);
console.log(s_6);

// for-of loop can detect 32-bit character
let s_7 = "𠮷𠮷𠮷𠮷𠮷";
for (let i in s_7) {
    console.log(s_7[i]);                // can not print corrent characters
}

for (let c of s_7) {
    console.log(c);                     // can print several 𠮷
}

// string.charAt function can not handle 32-bit character
console.log("𠮷".charAt(0));            // can not print 𠮷

// string.at function come with es6 can handle 32-bit charater
// console.log("𠮷".at(0));

// nomalize function
console.log("\u01D1");                  // print Ǒ
console.log("\u004F\u030C");            // print Ǒ
console.log(                            // print false, because them have same meaning but not same character
    "\u01D1" === "\u004F\u030C");   
console.log(                            // print true, because "\u004F\u030C" has bean changed to "\u01D1"
    "\u01D1" === "\u004F\u030C".normalize());

// string.includes(), string.startsWith(), string.endsWith()
let s_8 = "hello world!";
console.log(s_8.includes("ll"));        // print true
console.log(s_8.startsWith("hello"));   // print true
console.log(s_8.endsWith("!"));         // print true

// string.repeat() function
console.log("x".repeat(3));             // print xxx
console.log("x".repeat(2.9));           // print xx, because 2.9 will be trunced to 2
// console.log("x".repeat(-1));         // RangeError: Invalid count value
// console.log("x".repeat(Infinity));   // RangeError: Invalid count value

