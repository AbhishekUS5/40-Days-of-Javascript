// Objects
console.log("Day 12 - Javascript objects");
let user = {
    name: "Sam",
    age: 12,
    'is Admin': true
};
console.log(user.name) //sam
console.log(user.age) //12
user.age = 28;
user.isSeniorCitizen = false;
console.log(user.isSeniorCitizen)

console.log(user["is Admin"])
user['is Admin'] = false;
console.log(user['is Admin']);

user["movie lover"] = true;

// delete user["movie lover"]
// delete user.age;
console.log(user)

const somekey = "age";
console.log(user[somekey]);

// let car=prompt("which is your favorite car");
// let favCars = {
//     [car]: 5
// }
// console.log(favCars);

//constructor function
function Car(name, model) {
    this.name = name;
    this.model = model;
}
let bmw = new Car('BMW', "X1");
console.log(bmw);
console.log(bmw instanceof Car)

//Object()
const person = new Object();
person.name = "Alpha";
person.age = 76;
console.log(person);

//Factory function
function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(this.name, this.age)
        }
    }
}

const user1 = createUser("Tapas", 28);
console.log(user1);
user1.greet();
console.log(user1)
const user2 = createUser("bob", 12)
console.log(user2);

//object methods
let profile = {
    name: "Tapas",
    company: "BMW",
    message: function () {
        console.log(`${this.name} works ar ${this.company}`);
    }
}
console.log(profile.name)
console.log(profile.company)
profile.message()

//Nested objects
// an object can havea a property whise value can be another object
let profile1 = {
    name: "Tapas",
    company: "BMW",
    message: function () {
        console.log(`${this.name} works ar ${this.company}`);
    },
    address: {
        city: "Udupi",
        pincode: 576101,
        state: "Karnataka",
        County: "India",
        greeting: function () {
            console.log("Welcome to India")
        },
    },
    salary: 1000,
}
console.log(profile.salary);
// we can know if a value exists inside the object is by using key

// if(profile1.salary){
//     console.log("The salary exist");
// }
// else{
//      console.log("The salary property does not exist");
// }
// console.log(salary in profile);

console.log(profile1.address.city);
profile1.address.greeting();
// in operator to check if the particular property exist in the object
console.log("salary" in profile1);

//for..in loop
// iterates the whole object
for (let key in profile1) {
    // console.log(key);
    console.log(profile1[key]);
}

console.log(Object.keys(profile));

//Object reference
let fruit = { name: "Mango" }; //XA01
const oneMoreFruit = { name: "Mango" }; //YB02
console.log(fruit == oneMoreFruit);
console.log(fruit === oneMoreFruit);
// when we are comparing 2 objects they are always comnpared by their references not by their values assigned to them
fruit = oneMoreFruit;
console.log(fruit == oneMoreFruit);
console.log(fruit === oneMoreFruit);

// object.assign
// it copies all of the object properties from the source object to the target objects 
const target = {p:1, q:2};
const source = {a:3, b:5};
const returnObj = Object.assign(target,source);
console.log(returnObj)

const target1 = {p:1, a:2};
const source1 = {a:3, b:5};
const returnObj1 = Object.assign(target1,source1);
console.log(returnObj1)

