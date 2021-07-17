console.log("this is lecture 53");

function greet(name, greetText = "Greetings from JavaScript") {
    let myName1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}

let myName1 = "Ali";
let myName2 = "Ali Uppal";
let myName3 = "Ali Waheed";
let myName4 = "Hafiz Muhammad Ali";
let myName5 = "Ali bhai";
let greetText = "Good Morning";
greet(myName1);
greet(myName2, greetText);
greet(myName3, greetText);
greet(myName4, greetText);
// let returnVal = greet(myName5, greetText);
// console.log(returnVal);

let returnVal = sum(1, 2, 3);
console.log(returnVal);



// console.log(myName1 + " is a good boy");
// console.log(myName2 + " is a good boy");
// console.log(myName3 + " is a good boy");
// console.log(myName4 + " is a good boy");
// console.log(myName5 + " is a good boy");