let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
p1.then(() => {
    console.log("Hurray,1st Promise has been read");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 4000)
    })
}).then((value) => {
    console.log("This is under chaining");
    console.log(value);
})
p1.then(() => {
    console.log("Congratulations this promise is now resolved\nThis Run in a sequence ki jo upr h wo phle run krga")
})

p2.then(() => {
    console.log("1st promise resolved");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4);
        }, 4000)
    })
}).then((val) => {
    console.log("This is 2nd promise resolved");
    console.log(val);
    
})