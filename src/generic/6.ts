// You have a user registration form. Sometimes you need to pre-fill the form with user data for updating
//their profile.However, you don't always need to fill out all fields. For example, a user might want to update only their email and password, leaving their name and surname unchanged.
// Fix the type in the function argument to eliminate type errors.

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Updating the user
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};
