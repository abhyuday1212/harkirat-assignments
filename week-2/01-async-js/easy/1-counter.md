## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

let cv = 0;

//counter for 1,2,4,5,6,7
function counter() {
    cv = cv + 1
    console.log(cv);
}

// counter for 3,6,9,12...
function counter() {
    cv = cv + 1
    cv = cv + 1
    cv = cv + 1
    console.log(cv);
}

setInterval(counter, 1000);