//String
let fname: string;
fname = 'John';

let newname = fname.toUpperCase();

//number
let age: number;
age = 25;
age = 25.5;

let result = age.toString;

//arrays
let emplist: string[];
let deplist: Array<number>;

deplist = [1, 2, 3, 4, 5];
deplist.pop();

//Enum, NOTE USE CONST TO REMOVE THE EXCESS CODE GENERATED
const enum Color {
  Red,
  Green,
  Blue,
}

let newColor: Color = Color.Blue;

//Tuples
let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = swapNumbers(20, 15);

swapNumbs[0];
swapNumbs[1];

//Any (DO NOT USE UNLESS ABSOLUTELY NECESSARY)
let department: any;
department = 'IT';
department = 10;

//void

//never
