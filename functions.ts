//The : number is how you determine what data type is being returned i.e. number
//This will ensure that you include a return type when necessary
//num 3 is optional
function add(num1: number, num2: number, num3?: number): number {
  //must always include data type so you don't break your code
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(2, 3));
console.log(add(2, 3, 5));
//Here the return is implied through the arrow function
//num3 is required
const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3;

console.log(sub(3, 2));
console.log(sub(11, 1, 5));

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(mult(4, 2));

//Generic function
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}
//allows you to create a function to remove repetition when type is something that may be variable
let concatResult = getItems<number>([1, 2, 3, 4, 5]);

let concatString = getItems<string>(['a', 'b', 'c', 'd', 'e']);
