// console.log("Arrays");
// const mixedArray = [100, true, "tapascript", {}];
// // index start with 0 and end with length - 1
// const salad = ['tomato', 'Mushroom', 'Brocolli', 'corn', 'carrot', 'avacado'];

// function Car(model) {
//     this.model = model;
// }
// const bmwCar = new Car("BMW X1"); // it will create a car object
// console.log(bmwCar);
// // const salad1=salad;
// const anotherSalad = new Array('tomato', 'Mushroom', 'Brocolli', 'corn', 'carrot', 'avacado'); // constructor
// console.log(anotherSalad);

// console.log(salad === anotherSalad);

// const two = new Array(2); //[ <2 empty items> ]
// console.log(two);

// // const element = salad[index];
// // console.log(salad[0]);
// // console.log(salad[2]);
// // console.log(salad[5]);
// // for (let i = 0; i <= salad.length - 1; i++) {
// //     console.log(`Element at index ${i} is ${salad[i]}`)
// // }

// //push - inserts the element at the end of the array
// const ret = salad.push("Jack fruit");
// console.log(ret); //push() → returns the new array length
// console.log(salad); //To see the added value, log the array itself, not the return value

// //unshift - inserts the element at the beginning of the array
// const unshift = salad.unshift('Chocolates');
// console.log(unshift)
// console.log(salad)

// //pop - removes the element at the end of the array
// console.log(salad)
// const popreturn = salad.pop()
// console.log(popreturn)

// // shift - removes the element at the beggining of the array
// console.log(salad)
// const shiftreturn = salad.shift();
// console.log(shiftreturn)
// console.log(salad)

// //slice() - copy
// const saladCopy = salad.slice(); // it does not mutate the array
// console.log(saladCopy)
// console.log(salad === saladCopy) // false because they are diffrent references

// const check1 = Array.isArray(['tomato', 'Mushroom', 'Brocolli', 'corn', 'carrot', 'avacado']);
// console.log(check1)

// const check2 = Array.isArray(['Tomato'])
// console.log(check2)

// const check3 = Array.isArray({ 'Tomato': 'Tomatoes' })
// console.log(check3)

// const check4 = Array.isArray({})
// console.log(check4)

// const arr = [1, 2, 3, 4];
// const check5 = Array.isArray(arr);
// console.log(check5)

// //Array destructuring
// const [tomato, Mushroom, carrot] = ['tomato', 'Mushroom', 'Brocolli', 'corn', 'carrot', 'avacado'];
// console.log(tomato, Mushroom, carrot)
// const [tomatoes, mushrooms = "mush"] = ["tomato"];
// console.log(tomatoes, mushrooms);

// const [tomato1, , carrot1] = ['tomato', 'Mushroom', 'Brocolli']
// console.log(tomato1, carrot1)

// // nested array
// const nestedArray = ['tomato', 'Mushroom', ['Brocolli', 'corn', 'carrot',]];
// console.log(nestedArray[2][0])

// const veg = nestedArray[2]; // nestedArray's first 2 element is asn array so veg[2] gets the array from the list, not 2nd element. if it was not a nested array it will get only the 2nd element in the array
// const carrots = veg[2];
// console.log(veg)
// console.log(carrots)
// const veg2 = nestedArray[2][2]
// console.log(veg2)

// // Rest and spread
// const[tomatoess, mushrooms1, ...rest]= ["tom","mush","berry","nuts"]; // rest
// console.log( ...rest) //spread

// const mysalad=['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
// const mysaladcopy = [...mysalad];
// console.log(...mysaladcopy);

// //swapping
// let first ="first";
// let second="second";
// [first, second] = [second, first]
// console.log(first);
// console.log(second)

// const emot=['🙂', '😔']
// const veggies=['🥦', '🥒', '🌽', '🥕']
// const emotveggeis=[...emot, ...veggies]
// console.log(emotveggeis);
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// console.log(arr1.length)
// arr1.length=10;
// console.log(arr1.length)

// const merged = arr1.concat(arr2);
// console.log(merged)

//join
const emotions = ["🙂", "😍", "🙄", "😟"];
const joined = emotions.join("<=>")
console.log(joined)

//fill
const length = 5; // Desired length of the array
const value = 0;  // Value to fill the array with
const filledArray = new Array(length).fill(value);

console.log(filledArray); // Output: [0, 0, 0, 0, 0]

const colors = ["red", "blue", "green"]; // Initial array
colors.fill("pink", 1, 2); // Fill the array with "pink" from index 1 to index 2 (exclusive)
console.log(colors); // Output the modified array
