// You have the merge function that combines two objects.
// Use generics to indicate that these objects can be of any type.
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
export { merge };
