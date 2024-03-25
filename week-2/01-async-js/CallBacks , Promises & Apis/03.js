var p1 = new Promise((resolve, reject) => {
    console.log("Promise 1 is Pending");

    setTimeout(() => {
        console.log("I am promise 1 and I am resolved");
        resolve(true)
    }, 4000);

})


let p2 = new Promise(function (resolve, reject) {
    console.log("Promise 2 is Pending");

    setTimeout(() => {
        console.log("I am Promise 2 and I am rejected");
        reject(new Error("I am error from promise 2"))
    }, 4000);

})


// console.log(p1,p2);

//  Method 1 of writing
p1.then(function (data) {
    console.log(data);
})

p2.catch(function (error) {
    console.log(error)
})


//Method 2 of writing

p2.then((value) => {
    console.log(value)


}, (error) => {
    console.log(error)
})


