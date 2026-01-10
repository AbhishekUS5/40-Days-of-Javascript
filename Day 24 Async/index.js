// Problem with promises
//Syntax complexity: Chaining .then(), .catch(), .finally() can become overwhelming

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("I'm a promise");
    }, 1000)
});
promise.then((x) => console.log(x)); // x is the resolved value

// async
// when we write async in front of a function it means this function will return a promise 
async function foo() {
    return Promise.resolve(101);
}
foo().then(function (result) {
    console.log(result);
}); 
//. then() is used to retrive the actual promise from foo()
const retVar = foo();
console.log(foo);

const result = await foo(); //101
console.log(result); // we can use await instead of then() to get the actual resolved value

async function tacklePromise() {
    const result = await foo(); //101
    console.log(result);
}
tacklePromise(); //tacklePromise() wil execute the function, 
// while executing the function it will search for await keyword
// where it will resolve the promise and log the result
console.log(tacklePromise()); // undefined 

// // is await asynchronous
// async function tacklePromise1() {
//     const result = await foo(); //101
//     console.log(result);
// }
// console.log("Takle promise")
// tacklePromise1();
// // here, in line 37 const result will halt the execution, un til the result gets executed
// // does it mean halting line 37 chosing the keyword await to resolve a promise is actually the code synchronous
// // the function pauses at line 37

// Error handling
const errorPromise = new Promise((resolve, reject) => {
    reject("Error detected")
})
errorPromise.catch((error) => console.log(error))
async function handleErrorPromise() {
    try {
        await errorPromise;
    } catch (error) {
        console.log(error)
    }
}
handleErrorPromise();

