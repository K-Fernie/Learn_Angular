class Employee {
  //the # means that it's a private member meaning you can't re-assign out of the class
  //By default they are all public
  //Protected variables are accessable within the class and by classes that extend the class
  //you can create static methods that are accessible by using Employee.method();
  #id: number;
  name: string;
  address: string;
  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  //note that creating a class method does not require the 'function keyword'
  getNameWithAddress(): string {
    return `${this.name} ${this.address}`;
  }
  //getter
  get empId(): number {
    return this.#id;
  }
  //setter
  set empId(id: number) {
    this.#id = id;
  }
}

let emp = new Employee(1, 'John', 'Highway 71');
let address = emp.getNameWithAddress();
emp.empId = 123456;

console.log(address);
console.log(emp.empId);
