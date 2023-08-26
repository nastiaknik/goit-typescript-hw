// In TypeScript, the unknown type allows us to store any value, but we can directly assign an unknown
// variable to another variable if we are confident about its type.
// What needs to be corrected in this code to make it accurate and safe?

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}

export {};
