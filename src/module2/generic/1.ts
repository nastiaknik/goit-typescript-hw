// You have the getPromise() function, which returns a promise containing an array of strings and numbers.
// Complete this function using generics to return the correct type.

function getPromise<T extends (string | number)[]>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(["Text", 50] as T);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};
