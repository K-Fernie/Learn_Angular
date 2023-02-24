"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
}
let emp = new Employee(1, 'John', 'Highway 71');
let address = emp.getNameWithAddress();
console.log(address);
