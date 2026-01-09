console.log("Promises");

// what is a promise in javascript
// let promise = new Promise(function (resolve, reject) {

// })

// executor function
// function(resolve, reject) {

// }
// Logic goes here
// states
// pending: Initially when the executor function starts the execution
// fulfiled: when the promise is resolved
// rejected: when the promis is rejected

// result
// undefined: initally when the state value is pending
// value: when resolve(value) is called
// error: when reject(error) is called

// How prmises are resolved and rejected
// let promise = new Promise(function(result, reject){
//     resolve("Hey, im done")
// });

// let promise2 = new Promise(function(resolve, reject){
//     reject("Something is not right")
// })

// Handling promises

// .then()
// let loading = false;
// const promise = new Promise(function (resolve, reject) {
//     // make a network call(API call/IO operation)
//     loading = true;
//     resolve("I am resolved...")
// });

// promise.then(
//     (result) => { console.log(result) }
//     // (error) => { console.error(error) }
// ).catch(
//     (error) => {console.error(error)}
// ).finally(
//     () => {
//         loading = false;
//     }
// );

//promise chain
// rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() 
// handler.

// Rule 2: you can do maily 3 valuable things from the .then() method. 
// you can return another promise(for async operation). 
// you can retrun any other value from a synchronous operation. Lastly, you can throw an error

// return a promise from the .then() handler
// let getuser = new Promise(function (resolve, reject) {
//     const user = {
//         name: 'John Doe',
//         email: 'jdoe@gmail.com',
//         password: 'jdoe.password',
//         permissions: ['db', 'hr', 'dev']
//     };
//     resolve(user)
// });
// getuser.
//     then((user) => {
//         console.log(`Got user ${user.name}`)
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve('Bangalore')
//             }, 2000)
//         }).then((address) => {
//             console.log(`User address is ${address}`);
//         })
//     })

// // return a simple value from the .then() handler
// getuser.then(function (user) {
//     console.log(`Got user ${user.name}`);
//     return user.email;
// })
//     .then(function (email) {
//         console.log(`User email is ${email}`)
//     });

// // throw an error from the .then() handler
// getuser.then((user) => {
//     console.log(`Got user ${user.name}`)
//     if (!user.permissions.includes("hr")) {
//         throw new Error("You are not allowed to access the HR module")
//     }
//     return user.email;
// })
//     .then((email) => {
//         console.log(`User email is ${email}`)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// Rule 3: You can rethrow from the .catch() handler to handle the error later. 
// In this case, the control will go to the next closest .catch() handler.
let promise401 = new Promise(function (resolve, reject) {
    resolve(401)
})
promise401
    .catch((error) => {
        console.log(error);
        if (error === 401)
        {
            console.log("Rethrowing 401");
            throw error;
        }
        else{
            // do something
        }
})
.then((result)=>{
    console.log(result)
    console.log("resolved")
})

.catch((error)=>{
    console.log(`Handling ${error} here`)
})

// rule 4 - unlike .then() and .catch(), the .finally() handler doesn't process the result value
// or error. It just passes the result as is to the next handler

//create a promise
let promiseFinally = new Promise(function(resolve, reject){
    resolve('Testing finally.');
});