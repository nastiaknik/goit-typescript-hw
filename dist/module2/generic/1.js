// You have the getPromise() function, which returns a promise containing an array of strings and numbers.
// Complete this function using generics to return the correct type.
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
export {};
