import {evaluate}  from "mathjs"
import { useState } from "react";

const rows = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "=", ""],
];


const Calculator = () => {
    const [value, setvalue] = useState("");
    return (
        <div>
            <h1>Calculator</h1>
            <input type="text" role="textbox" value={value} readOnly />

            {rows.map((row) => {
                return (
                    <div key={row[0]} role="row">
                        {row.map((item, i) => {
                            return (
                                <button
                                    key={i}
                                    role="button"
                                    type="button"
                                    onClick={() => {
                                        if(item === "x") return setvalue(value + "*" );
                                        if (item === "C") return setvalue("");
                                        if (item === "=") return setvalue(evaluate(value));
                                        setvalue(value + item);
                                    }}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Calculator;