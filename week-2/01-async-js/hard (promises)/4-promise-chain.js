/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    const p1 = new Promise((resolve) => {
        //perform async task here
        setTimeout(() => {
            resolve("Promise1 on resolved")
        }, t);
    })

    return p1;

}

function wait2(t) {
    const p2 = new Promise((resolve) => {
        //perform async task here
        setTimeout(() => {
            resolve("Promise2 on resolved")
        }, t);
    })

    return p2;
}

function wait3(t) {
    const p3 = new Promise((resolve) => {
        //perform async task here
        setTimeout(() => {
            resolve("Promise3 on resolved")
        }, t);
    })

    return p3;
}

function calculateTime(time1, time2, time3) {
    wait1(time1).then((val1) => {
        console.log(val1);
        return wait2(time2)
    }).then((val2) => {
        console.log(val2);
        return wait3(time3)
    }).then((val3) => {
        console.log(val3);
        return
    })
}

calculateTime(1000, 2000, 5000)


//prmise chaining is useful but different from promise.All in terms of results.
/*
Promise.all => takes the array of promises and provides input as and when all the promises are resolved where as 

Chaining the promises functions => This does not wait for the all the promises to get resolved ,it directly provides the resolve value of whichever promise is called in top of the chain and gives the result then moves to second,and continuously thirsd , 4th , etc....



*/