console.log("Arrays");
const mixedArray = [100, true, "tapascript", {}];
// index start with 0 and end with length - 1
const salad = ['tomato', 'Mushroom', 'Brocolli', 'corn', 'carrot', 'avacado'];

function Car(model) {
    this.model = model;
}
const bmwCar = new Car("BMW X1"); // it will create a car object
console.log(bmwCar);
// const salad1=salad;
const anotherSalad = new Array('tomato', 'Mushroom', 'Brocolli', 'corn', 'carrot', 'avacado'); // constructor
console.log(anotherSalad);

console.log(salad === anotherSalad);

const two = new Array(2); //[ <2 empty items> ]
console.log(two);

// const element = salad[index];
// console.log(salad[0]);
// console.log(salad[2]);
// console.log(salad[5]);
// for (let i = 0; i <= salad.length - 1; i++) {
//     console.log(`Element at index ${i} is ${salad[i]}`)
// }

//push - inserts the element at the end of the array
const ret = salad.push("Jack fruit");
console.log(ret); //push() → returns the new array length
console.log(salad); //To see the added value, log the array itself, not the return value

//unshift - inserts the element at the beginning of the array
const unshift = salad.unshift('Chocolates');
console.log(unshift)
console.log(salad)

//pop - removes the element at the end of the array
console.log(salad)
const popreturn = salad.pop()
console.log(popreturn)

// shift - removes the element at the beggining of the array
console.log(salad)
const shiftreturn = salad.shift();
console.log(shiftreturn)
console.log(salad)

//slice() - copy
const saladCopy = salad.slice(); // it does not mutate the array
console.log(saladCopy)
console.log(salad === saladCopy) // false because they are diffrent references

const check1 = Array.isArray(['tomato', 'Mushroom', 'Brocolli', 'corn', 'carrot', 'avacado']);
console.log(check1)

const check2 = Array.isArray(['Tomato'])
console.log(check2)

const check3 = Array.isArray({ 'Tomato': 'Tomatoes' })
console.log(check3)

const check4 = Array.isArray({})
console.log(check4)

const arr=[1,2,3,4];
const check5 = Array.isArray(arr);
console.log(check5)

//Array destructuring
