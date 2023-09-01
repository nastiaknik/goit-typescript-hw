import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
// A form component in React. You have an input field in which you want to track changes
// using the onChange event handler.Your task is to correctly type the event that is passed to this function.
export function FormComponent() {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (_jsx("input", { autoFocus: true, type: "text", value: value, onChange: handleChange, style: {
            background: "#fff",
            borderColor: "#bbb",
            color: "#555",
            display: "block",
            borderWidth: "1px",
            borderStyle: "solid",
            padding: "12px",
            outline: 0,
            fontFamily: "inherit",
            fontSize: "0.95em",
            margin: "10px",
            maxWidth: "500px",
        } }));
}
