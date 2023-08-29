// Create a Student class containing three properties: name, age, and grade.
// Instead of declaring these properties in the class body, then in the constructor,
// and finally assigning them values, write a concise initialization.

class Student {
  constructor(public name: string, public age: number, public grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

export {};
