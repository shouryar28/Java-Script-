// h1 ke aage jo class =  heading likha hai usko attributes kha jata hai
//aur hum is attribute ko access kar sakte hai

// getAttribute(attr) to get the attribute value
// setAttribute(attr , value) to set the attribute value
let div = document.querySelector("div"); // this is to access first the div tag then we can only access the attribute key 
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let idd = div.setAttribute("id","namaste");
console.log(idd)
let h1 = document.querySelector("h1")
console.log(h1);

let cl = h1.getAttribute("class");
console.log(cl); 


