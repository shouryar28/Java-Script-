

// let div = document.querySelector("div");
// console.log(div);

// // Get Attribute

// let id = div.getAttribute("id");
// console.log(id);

// let Name = div.getAttribute("name");
// console.log(Name);
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"))

// Set attribute

// let paraa = document.querySelector("p");
// console.log(para.setAttribute("class","new_class"))

// styling through JS
// div.style.backgroundColor = "green"

// div.style.fontSize = "26px";

// div.innerText = " Hello ! ";

// div.style.visibility = "hidden"

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);
console.log(newBtn.innerText);

// -------------- Insert Elements --------------------

//  node.append(el) // adds at the end of node(inside)

let div = document.querySelector("div");
div.append(newBtn);

// node.prepend(el) // adds the element at the begining of the node(inside)

let divv = document.querySelector("div");
divv.prepend(newBtn);


// node.before(el) // adds element before the node(outside)

let divvv = document.querySelector("div");
divvv.before(newBtn)

// node.after(el) // adds element after the div ends (outside)

let divvvv = document.querySelector("div")
divvvv.after(newBtn)


let para = document.querySelector("p");
para.after(newBtn);


let heading = document.createElement("h1");
heading.innerHTML = "<i>Hello this is DOM</i>";

document.querySelector("body").prepend(heading)


//for removing any element

// node.remove(el)