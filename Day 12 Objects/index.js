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
const target = { p: 1, q: 2 };
const source = { a: 3, b: 5 };
const returnObj = Object.assign(target, source);
console.log(returnObj)

const target1 = { p: 1, a: 2 };
const source1 = { a: 3, b: 5 };
const returnObj1 = Object.assign(target1, source1);
console.log(returnObj1)

const obj = { name: "tapascript" };
const obj2 = Object.assign({}, obj);
console.log(obj2);
console.log(obj);
console.log(obj === obj2);

const obj3 = {
    a: 1,
    b: { c: 2 }
}
console.log(obj3.b.c);

const obj4 = Object.assign({}, obj3);
obj4.b.c = 3;
console.log(obj3.b.c) //3
console.log(obj4.b.c) //3 
// when we update the value in obj4, the changes also gets reflected in obj3
// object.assign performs shallow copy. it copies the properties value from the source to the target
// while dealing the nested objects, object.assgin copies the refernces of those nested objects rather than creating a new copy
/*const obj3 = {
    a: 1, // creaed a new copy
    b: { c: 2 } // here it just copies the references 
}*/
obj4.a = 1000;
console.log(obj4.a)
console.log(obj3.a)
// if u are dealing the non nested oject for assign it wil be creating a new reference always

// for deep cloning use structured clone 
const obj5 = structuredClone(obj3);
obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj4.a); // 1000
console.log(obj3.a) // 1

//object.entries
const myObj = { // convert object to array
    a: "Samuel",
    b: 12
}
const myArr = Object.entries(myObj);
console.log(myArr);

const entries = new Map([ // convert object to array
    ["foo", "bar"],
    ["baz", 42],
]);
const objEntries = Object.fromEntries(entries);
console.log(objEntries);

// immutabilty
// if we dont want the object to be changed 
const emp = {
    sal: 100
}
Object.freeze(emp);
emp.sal = 200;
delete emp.sal;
console.log(emp)
// checking if the object is immultable or mutable
console.log(Object.isFrozen(emp));

//seal
const dept = {
    name: "finanace"
}

Object.seal(dept);
dept.address = "Banglore" // it will not get addedd
dept.name = "HR"
console.log(dept);

console.log(Object.hasOwn(dept, "name"));

// Object destructuring
const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    "meals": "Gobi machurian",
    'parents': {
        'father': 'Brown Williamson',
        'mother': 'Sophia',
        'email': 'john-parents@abcde.com'
    },
    'address': {
        'street': '65/2, brooklyn road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    }
}
const { name, age } = student;
// const {name,age, meal="gobi"} =student;
const city = student.address.city;
let meals = student.meals ? student.meals : "bread"
console.log(name, age, meals)

const { subjects, numberOfSubjects = subjects.length } = student;
console.log(numberOfSubjects)

//alias
const { std: standard } = student;
console.log(standard)

const { address: { zip } } = student;
// console.log(address.zip);
console.log(zip)

//function destructuring
function sendEmail({ parents: { email } }) {
    //console.log(`Sent an email to ${student.parents.email}`)
    console.log(`Sent an email to ${email}`)
}
sendEmail(student);

const { name: anotherName, subjects: anotherSubs } = student;
console.log(anotherName, anotherSubs);

const students = [
    {
        'name': 'William',
        'grade': 'A'
    },
    {
        'name': 'Tom',
        'grade': 'A+',
    },
    {
        'name': 'Bob',
        'grade': 'B'
    }
];

for (let { name, grade } of students) {
    console.log(name, grade)
}

console.log("Optional Chaining ...")
const employee = {
    salary: {
        bonus: 300
    }
};
console.log(employee.sal);
// console.log(employee.dept.name) //error
const name1 = employee.department?.name
console.log(name1)