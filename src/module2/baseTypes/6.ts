// How would you specify the types for the arguments and return values of these functions?

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

export { showMessage, calc, customError };
