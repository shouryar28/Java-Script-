// ///--------------------Array

// let marks = [34,45,67,56]
// console.log(marks);
// console.log(marks.length) ;//property

// let Heros = ["Ironman","Antman","Hulk","Vision"];
// console.log(Heros);
// console.log(Heros[1]);

// // typeof array is a special type of object
// // Key value pair ki jagah index ko use karte hai

// // array ko change kar sakte hai particular index pe jaake 
// //lekin string mein aisa nhi hota (sirf JS mein)
// for(let i = 0; i < Heros.length ; i++)
// {
//     console.log("Hero's name = ",Heros[i])
// }
// console.log("\n");
// console.log();

// /* Two types of for loop----------

//   1. for of
//   2. for in  

// */

// let cities = ["Delhi","Pune","Chattisgarh","Gurgaon"];
// for(let city of cities)
// {
//     console.log(city)
// }


//Practice Questions
// Q1
let student_marks  = [45,75,45,23,23,12,69];
let sum = 0;
for(let i = 0;i< student_marks.length;i++)
{
    sum = sum+student_marks[i];
    
}
let Average = sum/student_marks.length;
console.log(Average);

// Another Approach..............................


for(let val of student_marks)
{
    sum += val;
}
let average = sum/student_marks.length;
console.log(Average);

//Q2.

let price = [250,645,300,900,50];
// let offer = 0.1;
// console.log("The Price of Every Product After applying offer:  \n")
// for(let i = 0; i < price.length;i++ )
// {
//   for(let j of price)
//   {
//     console.log(" The price of index ",i," is ",(j - (j*0.1)));
//   }
// }

let idx = 0;
for (let val of price){
    console.log(`value at index ${idx} = ${val}`);
    idx++;
}

// prices mein ab new values save ho chuki hai



