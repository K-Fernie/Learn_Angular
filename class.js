"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    constructor(id, name, address) {
        //the # means that it's a private member meaning you can't re-assign out of the class
        //By default they are all public
        //Protected variables are accessable within the class and by classes that extend the class
        //you can create static methods that are accessible by using Employee.method();
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    //note that creating a class method does not require the 'function keyword'
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
    //getter
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    //setter
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
let emp = new Employee(1, 'John', 'Highway 71');
let address = emp.getNameWithAddress();
emp.empId = 123456;
console.log(address);
console.log(emp.empId);
