const addBtn = <HTMLButtonElement>document.getElementById("addBtn");
const number1 = <HTMLInputElement>document.getElementById("number1");
const number2 = <HTMLInputElement>document.getElementById("number2");
const result = <HTMLParagraphElement>document.getElementById("result");

function add(num1: number, num2: number): number {
  result.textContent = `${num1} + ${num2} = ${num1 + num2}`;
  return num1 + num2;
}

addBtn.addEventListener("click", function () {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  add(num1, num2);
});
