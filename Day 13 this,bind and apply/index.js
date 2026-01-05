"use strict";
console.log("Day 13. The this keyword");
// purpose : it can helo us nderstand what exactly happenign in the particualr execution context
// this means pointing to something
// Global

// this keyword and window object
//this === window
console.log("This at the global", this); // window

// Binding
// Inside of an object - implicit binding
// way in which you understand that is if a method is called on an object using the dot notation, the context of this is bound or associated to the object on which we have invoked
const employee = {
    id: "A5778",
    firstName: "Alex",
    lastName: "B",
    returnThis: function () {
        return this;
    },
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(employee.id);
console.log("this value", employee.returnThis()); // outputs the object
console.log("this value", employee.returnThis());
console.log("constructed full name using this", employee.getFullName());

const tom = {
    name: "Tom",
    age: 7
}
const jerry = {
    name: "Jerry",
    age: 7
}
function greetMe(obj) {
    obj.logMessage = function () {
        console.log(`${this.name} is ${this.age} years old`)
    }
}
greetMe(jerry);
jerry.logMessage();

greetMe(tom);
tom.logMessage();

//inside function
function sayname() {
    console.log("this inside a function", this)
}
sayname();

function outer(a) {
    console.log("this inside an outer function", this);
    return function inner(b) {
        console.log("this inside an inner function", this);
    }
}
const outerResult = outer(5);
outerResult(3);

