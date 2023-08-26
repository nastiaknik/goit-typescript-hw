// You have the merge function that combines two objects.
// Use generics to indicate that these objects can be of any type.

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

export {};
