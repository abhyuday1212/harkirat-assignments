// var x = 5;

// function a() {
//     const x = 7;
//     console.log(this.x);

// }

// a()

// console.log(x);


// Clousure

function a() {
    for (let index = 0; index <= 5; index++) {
        const abc = 5;
        setTimeout(function abc() {
            console.log(index);
            console.log(abc);
            
        }, index * 1000);

        console.log("Control reached here: ");

    }
}

a();
