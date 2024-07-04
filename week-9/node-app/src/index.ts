// const x: number = 1;
// console.log(x);

function xyz(id: number): void {
  console.log("Aur bhai kya haal chal");
}

//---------------------------------------------------------------------

// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// class Manager implements Person {
//   // If we are implementing Person interface than in type script we need to hace defined that for whichever class we are implementing
//   name: string;
//   age: number;

//   constructor(x: string, y: number) {
//     this.name = x;
//     this.age = y;
//   }

//   greet(phrase: string): void {
//     console.log(`${phrase} ${this.name}`);
//   }
// }

// ---------------- types in typescript -----------------------

type User = {
  firstName: string;
  lastName: String;
  age: number;
};
//! type cannot be used to implement classes

interface User2 {
  firstName: string;
  lastName: String;
  age: number;
}
//! interfaces can be used to implement classes
// * Mostly used

//--------------------------------------------------------------------

// example of callback function where it receives two argument
function abc(cbFunction1: (str: string, num: number) => string): string {
  const x = cbFunction1("2", 2);
  return "1";
}
//--------------------------------------------------------------------

interface Manager1 {
  name: string;
}

type TechLead1 = {
  age: number;
  salary: number;
};

type Both = Manager1 & TechLead1;

/*
! Interface let you implement the classes
! Types let you use union and intersection formed bt interface or types

*/

//-------------  better way of writing a function -------------------


interface Manager2{
  name: string;
  age: number;
}

type TechLead2 = {
  age: number;
  salary: number;
};


function betterway(x: Manager2) {
  // yha kuch b kro
}

function betterway2(y: TechLead2) {
  //yha kuch v kro
}