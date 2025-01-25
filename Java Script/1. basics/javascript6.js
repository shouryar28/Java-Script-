// Taking input from user......................

// let name = prompt("Hello !");
// console.log(name);

//Q1 --> Get user to input a number using prompt("Enter a number: "). Check if the number is a multiple of 5 or not ?

 let num = prompt("Enter a Number");

if ((num % 5) === 0) {
    console.log("Multiple of 5");
}
else {
    console.log("Not a multiple of 5");
}

//Q2 --> Grade Card

let score = prompt("Enter your score (1-100)");
let Grade;
if (score >= 90 && score <= 100) {
    Grade = "A";
}
else if (score >= 70 && score <= 89) {
    Grade = "B";
}
else if (score >= 60 && score <= 69) {
    Grade = "C";
} else if (score >= 50 && score <= 59) {
    Grade = "D";
} else if (score >= 0 && score <= 49) {
    Grade = "F";
}

console.log("according to your scores, your grade was : ", Grade)