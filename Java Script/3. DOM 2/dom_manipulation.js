// in html by assigning id to the tags we can access them easily in js 

//---------------------------------------------

// // By ID
// let element = document.getElementById('myId');

// // By Class
// let elements = document.getElementsByClassName('myClass');

// // By Tag
// let divs = document.getElementsByTagName('div');

// // Query Selector (Single)
// let heading = document.querySelector('h1');

// // Query Selector All (Multiple)
// let allParagraphs = document.querySelectorAll('p');

let heading1 = document.getElementById("heading1");
console.dir(heading1);
let heading2 = document.getElementById("heading2");
console.dir(heading2);
let heading3= document.getElementById("heading3");
console.dir(heading3);
let heading4 = document.getElementById("heading4")
console.dir(heading4);

// we will not use console.log instead we will use console.dir

let headings = document.getElementsByClassName("heading")
console.log(headings)  // it returns a HTML collection like an array

//HTMLCollection(4) [div.heading, h1.heading, h1.heading, h2.heading]