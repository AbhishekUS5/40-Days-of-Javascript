// Problem with promises

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("I'm a promise");
    }, 1000)
});
promise.then((x) => console.log(x))