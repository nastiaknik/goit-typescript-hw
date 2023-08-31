// You have the AllType type. There's a compare function that takes two objects. 
// These objects have properties of the AllType type.Your task is to use Pick and generics to specify 
// that the properties of these objects belong to AllType.The compare function should return an object 
// of type AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;

function compare(top: TopType, bottom: BottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {compare};
