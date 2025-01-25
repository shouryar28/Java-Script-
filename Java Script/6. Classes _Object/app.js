// const student = {
//  fullName : "Shourya Raj",
//  marks : 85,
//  printMarks: function () {
//     console.log("marks = ",this.marks);
//  },
// };
// // Every object have some properties as well as behaviours
// //in Js every  object have a PROTOTYPE which include numbers of funcions already built-in 

// const employee = {
//    calcTax:  function  ()  {
//        console.log("Tax is 10%");
//    },
// };

// const karanArjun = {
//    salary : 50000,
//    calcTax()  {
//       console.log("tax rate is 20%"); // here is a chance of a clash may you can think 
//       // 
//       // one is calcTax() inherited from employee and another itself defined inside karanArjun object the more priority given to that fuunction which is more closer i.e. jo karanArjun ke andar declare kiye hai. 

//    }
// };

// // adding function of a class to a diff class
// karanArjun.__proto__ = employee;


// Classes in JS

// Class is a program - code template for creating objects.

// Those objects will have some state(variables) & some behaviour (functions) inside it.


// class ToyotaCar{
//    constructor(brand,milage){ // jaise hi koi object create hoga ye function automatically call ho jaayega
//       console.log("Creating New Car");
//       this.brand = brand;
//       this.milage = milage;
//    }
//    start(){
//       console.log("Start")
//    }
//     stop(){
//       console.log("stop")
//     }
// }

// let fortuner = new ToyotaCar("toyota",10);
// console.log(fortuner)
// fortuner.start();
// fortuner.stop();


// ------------------------ 

// Inheritance in Java

// class Parent{
//    hello(){
//       console.log("Hello, I am Parent");
//    }
// }

// class Child extends Parent{} // created a inherited class from parent for checking that all the fuctions of parent are working in child or not
// let obj = new Child();

class person{
   constructor(){
       this.species = "homo sapiens";
       console.log("Parent Constructor is invoked")
   }
   eat(){
      console.log("Eat");
   }
   sleep(){
      console.log("sleep");
   }

   work(){
      console.log("Do Nothing");
   }
}

class Engineer extends person{
   constructor(branch){
      console.log("Child constructor invoked")
      super(); // to invoking parent class constructor
      this.branch = branch;
      console.log("exit child constructor")
   }
   work(){ // yhi function invoke hoga , parent wala work function invoke nhi hoga agar Enginner ka object bnaya gyaa too
      super.eat(); // directly parent class ke functions ko access nhi kar sakte isiliye super keyword ka use karte hai
      console.log("solve problems, build something");
   }
}

let shourya = new Engineer("AI & ML");