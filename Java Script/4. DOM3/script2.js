let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt /*Event object */) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     // let a = 25;
//     // a++;
//     // console.log(a);
// }

// let div = document.querySelector("div")

// div.onmouseover = (evt) => {
//     console.log(evt)
//     console.log("You are inside div");
// }

// HTML mein jo event likhte hai usko inline handling bolte hai , isse html code bulky ho jata hai

// JS handling uske comparisn mein bhut effective rehta hai, 

// agr same tag pe event likhaa jaaye html aur js mein too js waale ko priority milta hai ********



// ***********  using event listener  *************

// by using event listener both inline and js event can be implemented simultaneously

btn1.addEventListener("click",() =>{
    console.log("button1 was clicked - handle1")
})
btn1.addEventListener("click",() =>{
    console.log("button1 was clicked - handle2")
})

const handler3 =  () => {
    console.log("button1 was clicked - handle3")
}


btn1.addEventListener("click",() =>{
    console.log("button1 was clicked - handle4")
})

// we can also remove any of the event listener 
// by using removeEventListener(event,listner)

// but for removing , function must be stored at the same address , so store it in a variable

btn1.removeEventListener("click",handler3)

// -------- Practice Question ------------

// let modeBtn = document.querySelector("#mode");
// modeBtn.addEventListener("click" , () => {
//     console.log("you are trying to change mode") ; 
// })


let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click" , () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
        document.querySelector("div").style.borderColor = "yellow"
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white"
        document.querySelector("h1").style.color = "black";
    }
    console.log(currMode);
})

box_color = "purple"; 
let div = document.querySelector("div");
div.addEventListener("mouseover", () => {
    if(box_color === "purple"){
        box_color = "black" ;
        div.style.backgroundColor = "black";
        div.innerText = "Colour changed to black"
        div.style.color = "white";
        // div.style.borderColor = "white"
    }
    else{
        box_color = "purple";
        div.style.backgroundColor = "blueviolet";
        div.innerText = "Colour changed to purple"
        div.style.color = "white"
    }
    
})


