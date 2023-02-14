import { describe, expect, it } from "vitest";
const canReconfigure =(from, to) => {
    if(typeof from !== "string" || typeof to !== "string") throw new Error("from and to should be strings");



    return true;
}

describe("canReconfigure", () => {
    if("should be a function", () => {
        expect(typeof canReconfigure).toBe("function");
    });
    it("should throw an error if from is not a string", () => {
        expect(() => canReconfigure()).toThrow();
    });

})