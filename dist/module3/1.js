// Create a Student class containing three properties: name, age, and grade.
// Instead of declaring these properties in the class body, then in the constructor,
// and finally assigning them values, write a concise initialization.
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
export { Student };
