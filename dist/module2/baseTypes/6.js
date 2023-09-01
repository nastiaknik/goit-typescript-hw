// How would you specify the types for the arguments and return values of these functions?
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
export { showMessage, calc, customError };
