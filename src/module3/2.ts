// Your task is to create two classes - Employee and Manager.

// 1. The Employee class should include:
// 1) a property name that will be accessible to everyone.
// 2) a property department that will be accessible only within the Employee class.
// 3) a salary that will be accessible only within the Employee class and its subclasses.

// 2. The Manager class should be a subclass of the Employee class.
// 3. You need to implement a constructor in the Manager class that calls the superclass constructor
// and increases the salary by 10000.

class Employee {
  public name: string;
  private department: string;
  protected salary: number;

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
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
    // this.salary += 10000;
  }
}

export {Manager};
