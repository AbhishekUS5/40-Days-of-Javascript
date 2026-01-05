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

const getFood = () => this;
console.log("this inside the arrow function defined in the global scope", getFood());

// const food ={
//     name: "mango",
//     color: "yellow",
//     getDesc: () => `${this.name} is ${this.color}`,
// }
// console.log(food.getDesc());
const food = {
    name: "mango",
    color: "yellow",
    getDesc: function () {
        return () => `${this.name} is ${this.color}`
    }
}
const descFunction = food.getDesc()
console.log(descFunction());

// explicit binding
// call method
function greeting() {
    console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
    name: 'Tapascript',
    address: 'Udupi'
};

greeting.call(user);

const likes = function (hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ', ' + hobby2);
}
const person = {
    name: "Sam"
}
likes.call(person, "teaching", "blogging");

const hobbiesToApply = ["sleeping", "eating"];
likes.apply(person, hobbiesToApply);

// bind()
const newHobbies = function (hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ', ' + hobby2);
}
const officer = {
    name: 'Bob'
};
const newFn = newHobbies.bind(officer, "Dancing", "singing");
newFn();

// the new binding
const Cartoon = function (name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function () {
        console.log(this.name + ' is a ' + this.animal);
    }
};

const tomCartoon = new Cartoon("tom", "cat");
tomCartoon.log()
const jerryCartoon = new Cartoon("Jerry", "mouse");
jerryCartoon.log()