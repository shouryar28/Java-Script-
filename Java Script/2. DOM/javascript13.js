console.log("Hello World!")
// window is global object     


//                       !!!! Selecting Method !!!!


// ----------------- Selecting With id ------------------

// document.getElementbyID("ID name")
  
let heading = document.getElementById("heading");   
console.log(heading)

let button = document.getElementById("myID");
console.log(button)


// ----------------- Selecting With Class ---------------- 


  // document.getElementByclassName("myClass")


let headings = document.getElementsByClassName("heading");
console.log(headings)


// ----------------- Selecting With tags ----------------

// document.getElementsByTagName("Name_of_tag")

let parahs = document.getElementsByTagName("p")
console.log(parahs)


//                    !!!! Query Selector !!!!

//    --------Two Types---------- 

//   1. document.querySelector("myId / myClass / tag")
// returns first element

//    2.  document.querySelectorAll("myId / myClass / tag")
// returns a NodeList


let First_el = document.querySelector("p");
console.log(First_el );

let elements = document.querySelectorAll("p");
console.log(elements);

//    ------------ Properties -----------

// TagName
console.log(First_el.tagName);
// innerText
console.log(First_el.innerText);
//innerHTML
console.log(First_el.innerHTML)
//textContent
console.log(First_el.textContent) // returns textual content even for hidden elements.


// First Child
console.dir(document.body.firstChild);

// Question Practice
let newline = document.querySelector("h1");
newline.innerText = newline.innerText + "Shourya Raj"
               