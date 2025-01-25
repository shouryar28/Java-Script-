// // function myFunction(){
// //     console.log("Hello, my name is Shourya Raj");
// //     console.log("I am 21 years old");
// // }

// // myFunction();

// // function myparams(msg) {
// //     console.log(msg);
    
// // }

// // myparams("Hello my name is raj");


//          // Arrow Function 
// const arrowSum =  (a,b) => {
//     return a+b
// }
console.log("Hello!");
window.console.log("Hello3");
// alert("Hello !");
// ---------------------------###########----------------------
// Document object model

// html mein jitne bhi elements hai wo js mein as a object aate  hai jaise ki button,h1,h2,h3 etc. they are known as Document in javascript 
console.log(window.document.body.childNodes[1]);

// it means that we can access every elements with there functioning

document.body.style.background = "red";  // if it is written under console then this change is temproray

document.body.childNodes[1].innerText = "Documented Oject Model"
document.body.childNodes[3].innerText = "Documented Oject Model"
document.body.childNodes[7].innerText = "Documented Oject Model"

// how to get node number of each element

document.body.childNodes.forEach((node, index) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      console.log(`Element: <${node.tagName.toLowerCase()}> is at node number ${index}`);
    }
  });
  