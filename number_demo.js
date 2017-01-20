// string to number
console.log(Number("255"));                                 // print 255
console.log(Number("0xff"));                                // print 255
console.log(Number("0b11111111"));                          // print 255
console.log(Number("0o377"));                               // print 255

// Number.isFinite() is used to check an object is finite number.
// Number.isNaN() is used to check an object is NaN.

console.log(Number.isFinite(15));                           // print true
console.log(Number.isFinite(0.8));                          // print true
console.log(Number.isFinite(NaN));                          // print false, not a number.
console.log(Number.isFinite(Infinity));                     // print false, is a number, but not finity
console.log(Number.isFinite(-Infinity));                    // print false, is a number, but not finity
console.log(Infinity === -Infinity);                        // print false, -Infinity is not same as Infinity
console.log(Number.isFinite("foo"));                        // print false, not a number
console.log(Number.isFinite("15"));                         // print false, not a number
console.log(Number.isFinite(true));                         // print false, not a number

console.log(Number.isNaN(NaN));                             // print true, exactly a NaN
console.log(Number.isNaN(15));                              // print false
console.log(Number.isNaN("15"));                            // print false
console.log(Number.isNaN(true));                            // print false
console.log(Number.isNaN(NaN / 9));                         // print true
console.log(NaN === (NaN / 9));                             // print false, intresting
console.log("------------------")
console.log(NaN / 9);                                       // print NaN
console.log(Number.isNaN(true / 1));                        // print false
console.log(true / 1);                                      // print 1
console.log(Number.isNaN(true / 0));                        // print false
console.log(Number.isNaN("true" / 0));                      // print true
console.log("true" / 0);                                    // print NaN
console.log(Number.isNaN("true" / "true"))                  // print true
console.log("true" / "true");                               // print NaN

// Number.parseInt()
// Number.parseFloat()

console.log(Number.parseInt(1.23));                         // print 1
console.log(Number.parseInt("1.23"));                       // print 1
console.log(Number.parseFloat(1));                          // print 1
console.log(Number.parseFloat(1.23));                       // print 1.23

// Number.isInteger()
console.log(Number.isInteger(1));                           // print true
console.log(Number.isInteger(1.0));                         // print true
console.log(Number.isInteger(25.1));                        // print false
console.log(Number.isInteger("1"));                         // print false
console.log(Number.isInteger(true));                        // print false

// Number.EPSILON 
console.log(Number.EPSILON);                            


