// 1. Create an abstract class House.
// Property door - it can be closed or open.
// Property key - an object of the Key class.
// Constructor takes an argument of the Key class and stores it in the key property.
// Method comeIn, which adds an object of the Person class to the tenants property and it works only if the door is open.
// Abstract method openDoor that takes an argument of the Key class.

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person entered the house.");
    } else {
      console.log("The door is closed. Cannot enter.");
    }
  }
  abstract openDoor(key: Key): void;
}

// 2. Create a class Key.
// It has only the property signature.
// Upon object creation, generate a random number and store it in the private property signature.
// The method getSignature returns the random number from the signature property.

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

// 3. Create a class Person.
// The constructor takes a key of the Key class and stores it in the private property key.
// The method getKey returns the key.

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// 4. Create a class MyHouse that implements the abstract class House.
// Implement the openDoor method since it takes a key, compare the stored key in the key property
// with the key from the argument, if they match, open the door.

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("The door is now open.");
    } else {
      console.log("Invalid key. Door remains closed.");
    }
  }
}

// 5. Make the resident enter the house.
const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);
house.openDoor(person.getKey());
house.comeIn(person);

export {};
