/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function khudkafn(n) {
    const p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("n sec k baad resolve hua")

        }, n)
    })
    return p;
}

khudkafn(5000).then(function (val) {
    console.log(val);
})

// Promise can also be called directly
let p = new Promise((resolve) => {
    setTimeout(() => {
        resolve("1st arg is resolved")
    }, 2000)
})

p.then((resolveKiValue) => {
    console.log(resolveKiValue);
})











// Method -2 for two promises

function khudkafn(n) {
    const p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("5 sec k baad resolve hua")

        }, n)
    })
    return p;
}

khudkafn(5000).then(function (val) {
    console.log(val);
    return khudkafn(5000); // Make sure to return the promise for chaining
}).then(function (val2) {
    console.log(val2);
});
