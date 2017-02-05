describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    })
});

// jasmine js is a BDD test framework.
// so a test suite need to create with a describe() function to describe a behaviour of the program

// spec is created with a it() invoke
// we provide a title and a test function to it.

// a spec contains one or more expectations

// expectations
// Expectations are built with the function expect which takes a value,
// called the actual. it is chaind with a Matcher function,
// which takes the expected value.

// matchers
// Each matcher implements a boolean comparison between the actual value and the expected value.
// it is responsible for reporting to jasmine if the expectation is ture or false.
// jasmine will then pass or fail the spec

describe("A suite is just a function", function () {
    var a;

    it("sepc is just a function", function () {
        a = true;

        expect(a).toBe(true);
    })
});

describe("The toBe matcher", function () {
    it("compares with ===", function () {
        expect(true).toBe(true);
    })
});

describe("The not", function () {
    it("can evaluate to a negative assertion", function () {
        expect(true).not.toBe(false);
    });
});

// matchers
// jasmine has a rich set of matchers.
// There is also the ability to write custom matchers.

describe("matchers", function () {

    it("The toBe matcher compares with ===", function () {
        var a = 12;
        var b = a;

        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });

    it("The toEqual matcher works for simple literals and variables", function () {
        var a = "hello world";
        expect(a).toEqual("hello world");
    });

    it("The toEqual matcher also works for objects", function () {
        var foo = { a: 1, b: 2 };
        var bar = { a: 1, b: 2 };
        expect(foo).toEqual(bar);
    });

    it("The toMatch matcher is for regular expression", function () {
        expect("hello world").toMatch(/hello \w+/);
        expect("hello world").not.toMatch(/good night \w+/);
    });

    // toBeDefined
    // toBeUndefined
    // toBeNull
    // toBeTruthy
    // toBeFalsy
    // toContain
    // toBeLessThan
    // toBeGreaterThan
    // toBeCloseTo
    // toThrow
    // toThrowError

    
});