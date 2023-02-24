interface User {
  //Creates a template for objects
  name: string;
  //Question mark makes it an optional member
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: 'John', age: 12, id: 1, email: 'hello@hello.com' };

interface Employees extends User {
  salary: number;
}

let employee: Employees = {
  name: 'John',
  age: 12,
  id: 1,
  email: 'hello@hello.com',
  salary: 1000,
};

export interface Login {
  login(): User;
}
