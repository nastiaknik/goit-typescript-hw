"use strict";
const addBtn = document.getElementById("addBtn");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");
function add(num1, num2) {
    result.textContent = `${num1} + ${num2} = ${num1 + num2}`;
    return num1 + num2;
}
addBtn.addEventListener("click", function () {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    add(num1, num2);
});
//# sourceMappingURL=index.js.map