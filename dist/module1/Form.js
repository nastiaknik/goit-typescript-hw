import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Wrapper, StyledForm, Label, Input, Button, ResultParagraph, } from "./Form.styled";
export const Form = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(null);
    function add(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            setResult("Please enter valid numbers!");
        }
        else {
            setResult(`${num1} + ${num2} = ${num1 + num2}`);
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        const newValue = parseFloat(value);
        if (name === "number1") {
            setNumber1(newValue);
        }
        else if (name === "number2") {
            setNumber2(newValue);
        }
    };
    return (_jsx(Wrapper, { children: _jsxs(StyledForm, { autoComplete: "off", children: [_jsxs(Label, { children: ["Number 1", _jsx(Input, { type: "number", name: "number1", value: number1, onChange: handleChange, required: true })] }), _jsxs(Label, { children: ["Number 2", _jsx(Input, { type: "number", value: number2, name: "number2", onChange: handleChange, required: true })] }), _jsx(Button, { type: "button", onClick: () => add(number1, number2), children: "Add" }), _jsx(ResultParagraph, { children: result })] }) }));
};
