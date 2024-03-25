/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function khudkafn(n) {
    const p = new Promise(function (resolve) {
        //basically thread ko bsy krn k liye perform synchronous task otherwise perfor synchronous task
        for (let i = 0; i < n; i++) {
            console.log("Thread bsy");
        }
    })
    return p;
}

khudkafn(5000).then(function (val) {
    console.log(val);
})

console.log("hlw ji");
