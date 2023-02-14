import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from "vitest";
import Calculator from "../src/Calculator.jsx";
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
describe("Calculator", () => {
    afterEach(cleanup);

    it("should render", () => {
        render(<Calculator />);
    });

    it("should render title correctly", () => {
        render(<Calculator />);
        screen.getByText("Calculator");
    });

    it("should render number", () => {
        render(<Calculator />);
        numbers.forEach((num) => {
            screen.getByText(num);
        });
    });

    it("should render four rows", () => {
        render(<Calculator />);
        const rows = screen.getAllByRole("row");
        expect(rows).toHaveLength(5);
    });

    it("should render four buttons in each row", () => {
        render(<Calculator />);
        const rows = screen.getAllByRole("row");
        rows.forEach((row) => {
            const buttons = row.querySelectorAll("button");
            expect(buttons).toHaveLength(4);
        });
    });

    it("should render equal sign", () => {
        render(<Calculator />);
        console.log("sadasd");
        screen.getByText("=");
    });

    it("should render input", () => {
        render(<Calculator />);
        screen.getByRole("textbox");
    });

    it("should user input after click number", () => {
        render(<Calculator />);
        const input = screen.getByRole("textbox");
        const button = screen.getByText("1");
        fireEvent.click(button);
        expect(input.value).toBe("1");
    });

    it("should user input after click several number", () => {
        render(<Calculator />);
        const input = screen.getByRole("textbox");
        const one = screen.getByText("1");
        const two = screen.getByText("2");
        const three = screen.getByText("3");
        fireEvent.click(one);
        fireEvent.click(two);
        fireEvent.click(three);
        expect(input.value).toBe("123");
    });

    it("should user input after click operator", () => {
        render(<Calculator />);
        const input = screen.getByRole("textbox");
        const one = screen.getByText("1");
        const plus = screen.getByText("+");
        fireEvent.click(one);
        fireEvent.click(plus);
        expect(input.value).toBe("1+");
    });

    it("should user input after click C", () => {
        render(<Calculator />);
        const input = screen.getByRole("textbox");
        const one = screen.getByText("1");
        const plus = screen.getByText("+");
        const C = screen.getByText("C");
        fireEvent.click(one);
        fireEvent.click(plus);
        expect(input.value).toBe("1+");
        fireEvent.click(C);
        expect(input.value).toBe("");
    });

    // click used userEvent instead of fireEvent
    it("should user input after click equal", async () => {
        render(<Calculator />);
        const input = screen.getByRole("textbox");
        const one = screen.getByText("1");
        const plus = screen.getByText("+");
        const equal = screen.getByText("=");
        await userEvent.click(one);
        await userEvent.click(plus);
        await userEvent.click(one);
        await userEvent.click(equal);        
        expect(input.value).toBe("2");
    }); 
});
