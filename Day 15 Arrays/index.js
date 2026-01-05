console.log("Arrays");
const mixedArray = [100, true, "tapascript", {}];
// index start with 0 and end with length - 1
const salad = ['tomato','Mushroom','Brocolli','corn', 'carrot','avacado'];

function Car(model){
    this.model = model;
}
const bmwCar = new Car("BMW X1"); // it will create a car object
console.log(bmwCar);
// const salad1=salad;
const anotherSalad = new Array('tomato','Mushroom','Brocolli','corn', 'carrot','avacado'); // constructor
console.log(anotherSalad);

console.log(salad === anotherSalad);

const two = new Array(2); //[ <2 empty items> ]
console.log(two);