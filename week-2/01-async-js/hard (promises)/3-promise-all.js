/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
    Promise.all([wait1(time1), wait2(time2), wait3(time3)]).then((values) => {
        console.log(values);
    })
}

calculateTime(1000, 2000, 5000)
