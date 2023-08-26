# Homework 2 assignment for the TypeScript Module

## Basic Types

### Task 1

Convert this code to TypeScript by providing appropriate types for all variables.

```ts
let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
  return 100 + a;
};
```

### Task 2

A JavaScript variable can hold values of any type:

```ts
let anything = -20;
anything = "Text";
anything = {};
```

### Task 3

In TypeScript, the unknown type allows us to store any value, but we can directly assign an unknown variable to another variable if we are confident about its type.

What needs to be corrected in this code to make it accurate and safe?

```ts
let some: unknown;
some = "Text";
let str: string;
str = some;
```

### Task 4

```ts
let person = ["Max", 21];
```

How can you rewrite it in TypeScript using the concept of tuples to ensure that the first element will always be a string, and the second one will always be a number?

### Task 5

How would you define a variable in TypeScript that can hold either a string or a number (union type)?
Also, define a variable that can hold only one of the two string values: 'enable' or 'disable' (literal type)?

### Task 6

How would you specify the types for the arguments and return values of these functions?

```ts
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}
```

### Task 7

Create a function isWeekend that takes a day of the week (from your enum) and returns a boolean value indicating whether it's a weekday or weekend.

### Task 8

Create a type "Gender" using a union type that can contain values "male" and "female". Declare a variable myGender of this type.

### Task 9

Create a new data type that fits these two objects.

```ts
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
```

## Generic

### Task 1

You have the getPromise() function, which returns a promise containing an array of strings and numbers. Complete this function using generics to return the correct type.

```ts
function getPromise() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
```

### Task 2

You have the AllType type. There's a compare function that takes two objects. These objects have properties of the AllType type. Your task is to use Pick and generics to specify that the properties of these objects belong to AllType. The compare function should return an object of type AllType.

```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
```

### Task 3

You have the merge function that combines two objects. Use generics to indicate that these objects can be of any type.

```ts
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
```

### Task 4

Use generics and interfaces to fix the type issue in the following classes:

```ts
class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
```

### Task 5

You need to implement the KeyValuePair interface that describes a key-value pair. Use generics so that this interface can work with any types of keys and values.

```ts
interface KeyValuePair {
  key;
  value;
}
```

### Task 6

You have a user registration form. Sometimes you need to pre-fill the form with user data for updating their profile. However, you don't always need to fill out all fields. For example, a user might want to update only their email and password, leaving their name and surname unchanged.

Fix the type in the function argument to eliminate type errors.

```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User) {
  // Updating the user
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
```

### Task 7

You have the UserRole enum used for classifying users in your application. You want to create a RoleDescription object that maps each user role to its description.

```ts
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
```

### Task 8

You have the Form type that contains information about a form, including the errors field. You want to create a new Params type that includes all fields from Form except errors.

```ts
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Form;
``;
```
