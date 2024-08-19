// ### gist 1
function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    return findSum(100);
}

setTimeout(findSumTill100, 1000)
console.log("hello world");




// ### gist 2
const fs = require('fs');

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});





//### gist 3

const fs = require('fs');

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});




//### gist 4
function printHelloWorld() {
    console.log("hello world")
}
setTimeout(printHelloWorld, 5000);

let ans = 0;
for (let i = 1; i < 5; i++) {
    ans = ans + i
}
console.log(ans);



// ### gist5
const fs = require('fs');

// my own asynchronous function
function kiratsReadFile(cb) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        cb(data);
    });
}

function onDone(data) {
    console.log(data)
}

kiratsReadFile(onDone)





// ### gist 6
const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
    return new Promise(function (resolve) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data) {
    console.log(data)
}

kiratsReadFile().then(onDone);





// ### gist 7
function kiratsAsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}

function main() {
    kiratsAsyncFunction().then(function (value) {
        console.log(value);
    });
}

main();





// gist 8

function kiratsAsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}

async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
}

main();




// ###gist 8

function kiratsAsyncFunction() {
    let p = new Promise(function (resolve) {
        resolve("hi there");
    });
    return p;
}

const value = kiratsAsyncFunction();
value.then(function (data) {
    console.log(data);
})





// ### gist 9

function kiratsAsyncFunction() {
    let p = new Promise(function (resolve) {
        resolve("hi there");
    });
    return p;
}

const value2 = kiratsAsyncFunction();
value2.then(function (data) {
    console.log(data);
})



// ### gist 9

function kiratsAsyncFunction(callbackFunction) {
    // do some async logic here
    callbackFunction("hi there!")
}

async function main() {
    kiratsAsyncFunction(function (value) {
        console.log(value);
    });
}

main();


const someAsyncFn = async (cb) => {
    cb("Hi ji")
}

function mainFn() {
    someAsyncFn(function (val) {
        console.log(val);
    })

}

mainFn()

