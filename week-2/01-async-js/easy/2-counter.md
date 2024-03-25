## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let cv = 0;

//counter for 1,2,4,5,6,7
function counter() {
    cv = cv + 1
    console.log(cv);
    callSettimeout()
}

function callSettimeout (){
    setTimeout(counter,1000); 
}

callSettimeout()


//Method 2 : using callback

function counter(cv) {
    cv = cv + 1
    console.log(cv);
    callSetTimeout(cv);
}

function callSetTimeout(cv) {
    setTimeout(() => counter(cv), 1000);
}

// Start the counter with an initial value of 0
callSetTimeout(0);



<!-- Example usage of call backs -->

function kiratsAsyncFunction(callback) {
    // do some async logic here
    callback("hi there!")
}

async function main() {
  kiratsAsyncFunction(function(value) {
    console.log(value);
  });
}

main();



































































(Hint: setTimeout)