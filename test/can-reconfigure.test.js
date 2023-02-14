import { describe, expect, it } from "vitest";
const canReconfigure = (from, to) => {
    if (typeof from !== "string" || typeof to !== "string")
        throw new Error("from and to should be strings");
    if (from.length !== to.length)
        throw new Error("from and to should be the same length");
    const hastSameUniqueLetters = new Set(from).size === new Set(to).size;
    if (!hastSameUniqueLetters) return false;

    const transformation = {};
    for (let i = 0; i < from.length; i++) {
        const fromLetter = from[i];
        const toLetter = to[i];
        const storeLetter = transformation[fromLetter];
        if (storeLetter && storeLetter !== toLetter) return false;
        transformation[fromLetter] = toLetter;
    }

    return true;
};

describe("canReconfigure", () => {
    if (
        ("should be a function",
        () => {
            expect(typeof canReconfigure).toBe("function");
        })
    );
    it("should throw an error if from is not a string", () => {
        expect(() => canReconfigure()).toThrow();
    });
    it("should thorw if canReconfigure is diferent to length", () => {
        expect(() => canReconfigure("abc", "ab")).toThrow();
    });
    it("should thorw if canReconfigure is diferent to length even with unique letters", () => {
        expect(canReconfigure("aab", "abc")).toBe(false);
    });
    it("should return true if canReconfigure is the same length", () => {
        expect(canReconfigure("abc", "def")).toBe(true);
    });
    it("should return false if strings have different number of unique letters", () => {
        expect(canReconfigure("aac", "def")).toBe(false);
    });
    it("should  return false if strings has different order od transformation", () => {
        expect(canReconfigure("XBOX", "XXBO")).toBe(false);
    });
});
