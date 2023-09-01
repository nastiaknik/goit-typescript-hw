// You have the AllType type. There's a compare function that takes two objects. 
// These objects have properties of the AllType type.Your task is to use Pick and generics to specify 
// that the properties of these objects belong to AllType.The compare function should return an object 
// of type AllType.
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
export { compare };
