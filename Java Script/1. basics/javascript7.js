// for(let i = 0; i <= 4 ; i++)
// {
//     console.log("Shourya RAJ "); //5 TIMES EXECUTION
// }

//-----------------------------------

// sum = 0;
// for(let i = 1; i<=5 ; i++)
// {
//     sum = sum + i;
// }
// console.log("Sum = ",sum);

//-------------loop in a string----------------

// let str = "HALDIA INSTITUTE OF TECHNOLOGY";

// for (let i of str){
//     console.log("i = ",i)
// }

//-----------------------------------

// let student = {
//     name : "Raj",
//     roll : 443,
//     age : 20,
//     cgpa : 7.0,

// };
// for (let key in student)
// {
//     console.log("key = ",key, " value  = ",student[key]);
// }

//--------------------------------

// let num = 1;
// while(num <= 100)
// {
//     console.log("number = ",num);
//     num++;
// }

//---------------------------------


// while(num<=100)
// {
//     if((num%2) == 0)
//     {console.log("Even number = ",num)}
//  num++;
// }



//Q2 Guessing a Number:

gameNum = 10;
let userNum = prompt("Enter Your Guessed Number: ");

while(gameNum !=userNum)//(NOTE ;- DONT USE !== CAUSE THE INPUT TAKEN FROM THE USER IS IN STRING FORM) //jabtak usernumber nhi equal hai gamenum ke tab tak ye loop chalao  
{
 userNum = prompt("You have enterd wrong number,please try again: ");
       
}
console.log("Congratulations , You entered the right Number ");