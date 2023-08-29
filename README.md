# Homework 3 assignment for the TypeScript Module

## Task 1
Create a class Student that contains three properties: name, age, and grade. Instead of declaring these properties in the class body, then in the constructor, and finally assigning them values, write a concise initialization.

```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```

## Task 2
Create two classes - Employee and Manager.
1. The Employee class should include:
A property name, which should be accessible to everyone.
A property department, which should be accessible only within the Employee class.
salary, which should be accessible only within the Employee class and its subclasses.
2. The Manager class should be a subclass of the Employee class.
Implement a constructor in the Manager class that calls the superclass constructor and increases the salary by 10000.

```ts
class Employee {
  // Fill in access modifiers
  name: string;
  department: string;
  salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Implement the constructor and increase salary by 10000
}
```

## Task 3
You are creating a game where there are characters with different roles. Now you are working on the Wizard class, which should implement two interfaces - ICharacter and ISpellCaster.
Define interfaces ICharacter and ISpellCaster to match the requirements of the Wizard class:
1. The ICharacter interface should include properties name and level, as well as methods introduce and levelUp.
2. The ISpellCaster interface should include the method castSpell.

```ts
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// testing the class
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
```

## Task 4 \*
In this task, you need to implement a scenario where a person, a key, and a house interact with each other.
1. Key: Create a class Key. It should have a private property signature, which is randomly generated when an object of this class is created (for example, Math.random()). This class should also have a method getSignature that returns the value of the signature property.
2. Person: Create a class Person. The constructor of this class takes an object of the Key class and stores them in a private property key. The Person class should have a method getKey that returns the stored key.
3. House: Create an abstract class House. This class should have two properties: door, which can be open (true) or closed (false), and key, which stores an object of the Key class. This class should also have a method comeIn that adds an object of the Person class to the tenants array if the door is open. Your abstract class House should also have an abstract method openDoor, which takes an object of the Key class.
4. MyHouse: Create a class MyHouse that inherits from the abstract class House. Implement the openDoor method in this class. If the key passed to this method matches the key stored as key, then the door opens.
5. After implementing all classes, create objects for each class and try to recreate a scenario where a person comes home.

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```
