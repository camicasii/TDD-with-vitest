import { render, screen,cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

const Calculator = () => {
    return (
        <div>
            <h1>Calculator</h1>
        </div>
    );
};

describe("Calculator", () => {
    afterEach(cleanup)
    
    it("should render", () => {        
        render(<Calculator />);
    })
    it("should render title correctly", () => {
        render(<Calculator />);
        screen.getByText("Calculator");
    })



    
    });