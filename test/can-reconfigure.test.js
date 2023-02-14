import { describe, expect, it } from "vitest";
const canReconfigure =(from, to) => {
    if(typeof from !== "string" || typeof to !== "string") throw new Error("from and to should be strings");
    if(from.length !== to.length) throw new Error("from and to should be the same length");
    



    return true;
}

describe("canReconfigure", () => {
    if("should be a function", () => {
        expect(typeof canReconfigure).toBe("function");
    });
    it("should throw an error if from is not a string", () => {
        expect(() => canReconfigure()).toThrow();
    });
    if("should thorw if canReconfigure is diferent to length", () => {
        expect(() => canReconfigure("abc", "ab")).toThrow();        
    });

})