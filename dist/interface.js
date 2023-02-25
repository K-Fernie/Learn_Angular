"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: 'John', age: 12, id: 1, email: 'hello@hello.com' };
//OBJECT DESTRUCTURING
let { name: userName, age, id, email, } = { name: 'JohnDOES', age: 12, id: 1, email: 'hello@hello.com' };
console.log(userName);
let employee = {
    name: 'John',
    age: 12,
    id: 1,
    email: 'hello@hello.com',
    salary: 1000,
};
let users = [
    { name: 'JohnDOES', age: 12, id: 1, email: 'hello@hello.com' },
    { name: 'JohnDOES', age: 12, id: 1, email: 'hello@hello.com' },
];
console.log(users[1]);
//OR you can desctructure it
let [user1, user2, ...restUsers] = [
    { name: 'JohnDOES', age: 12, id: 1, email: 'hello@hello.com' },
    { name: 'JohnDOES', age: 12, id: 2, email: 'hello@hello.com' },
];
console.log(user1);
//NOTE INTERFACES DO NOT EXIST IN JAVASCRIPT
//Decorators
//In order to use decorators you will need to enable experimentalDeocrators in tsconfig
// @Component({})
// class Component{
//   constructor(public name: string){}
// }
//# sourceMappingURL=interface.js.map