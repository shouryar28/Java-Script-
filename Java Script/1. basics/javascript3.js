// LET,VAR & CONST

//var: Variable can be re-declared and updated. A global scope variable

var a = 35;

var a = 32;

var a = 85;


//  let: can not be re-declared but can be updated ,, ## it can be re-declared in another bolck of code

{
  // This is a block in js

  let b = 45;

  b  = 67;

  console.log(b);

}

{
  // 2nd Block

  let b = 89;

  b = 56;

  console.log(b);
}



// const : Variable can not be redeclared or updated. A block scope vriable

{
  const a = 45;

  // a  = 56

  //javascript3.js:42 Uncaught TypeError: Assignment to constant variable.
  // at javascript3.js:42:6
}

{
  const a = 90;

  console.log(a)
}


/*let fullName = "Shourya Raj";
let age = 24;*/








// Creating a object  (key : value)
const student = {  // Equal to is mandatory
  fullName: "Rahul Kumar", // equal to ka use nhi karna hai , ye use hoga (:) 
  age: 20,
  cgpa: 8.2,
  isPass: true, 

};
student.fullName = "Rahul Sharma";
student.cgpa = "9" 
student.age += 1; 
console.log(student.fullName)




let a =7;
let b = 6;
console.log( a+b)
console.log( a-b)
console.log( a*b)
console.log( a/b)
console.log( a%b)

