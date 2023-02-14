import { describe, expect, it } from "vitest";
import fizzbuzz from "../src/fizzbuzz";

/* 
    This is a test file. It's a module that exports a function called `describe`.
    This function takes a string and a function as arguments. The string is the
    name of the test suite, and the function is the test suite itself.
*/

describe("FizzBuzz", () => {
    // This is a test suite. It contains one or more tests.
    

    it("should throw an error if n is not a number", () => {
        expect(() => fizzbuzz()).toThrow();
    });

    it("should throw a specific error message an error if n is not a number", () => {
        expect(() => fizzbuzz()).toThrow(/number/);
    });

    it("should throw a specific error message an error if n is not a number is provider", () => {
        expect(() => fizzbuzz(NaN)).toThrow("n should be a number");
    });
    it("should return 1 if n is 1", () => {
        expect(fizzbuzz(1)).toBe(1);
    });
    it("should return 'Fizz' if number provider is multiple of 3 ", () => {
        for (let i = 3; i <= 100; i += 3) expect(fizzbuzz(i)).toBe("Fizz");
    });
});
