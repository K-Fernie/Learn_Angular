interface User {
  //Creates a template for objects
  name: string;
  //Question mark makes it an optional member
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: 'John', age: 12, id: 1, email: 'hello@hello.com' };

//OBJECT DESTRUCTURING
let {
  name: userName,
  age,
  id,
  email,
}: User = { name: 'JohnDOES', age: 12, id: 1, email: 'hello@hello.com' };
console.log(userName);

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

let users: User[] = [
  { name: 'JohnDOES', age: 12, id: 1, email: 'hello@hello.com' },
  { name: 'JohnDOES', age: 12, id: 1, email: 'hello@hello.com' },
];

console.log(users[1]);

//OR you can desctructure it
let [user1, user2, ...restUsers]: User[] = [
  { name: 'JohnDOES', age: 12, id: 1, email: 'hello@hello.com' },
  { name: 'JohnDOES', age: 12, id: 2, email: 'hello@hello.com' },
];

console.log(user1);

//NOTE INTERFACES DO NOT EXIST IN JAVASCRIPT
