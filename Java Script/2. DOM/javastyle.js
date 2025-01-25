// // Manipulating styles through javaScript .... 

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor= "green";
// // div.style.backgroundColor = "purple";

// div.style.fontSize ="15px"
// div.style.visibility = " "


// Inserting Elements............
// 1.  Create
let newbtn = document.createElement("button")
newbtn.innerText = "click me";
console.log(newbtn);
//  2. Insert
let div = document.querySelector("p")
div.append(newbtn); 
div.prepend(newbtn);


//  1. Create
let  XXX = document.createElement("h1")
XXX.innerHTML = "<i>This heading is inserted through JS !</i>"

// 2. Insert
let p = document.querySelector("p")
p.after(XXX);

// Deleting a Element..............

//node.remove()

let para = document.querySelector("p");
para.remove();

