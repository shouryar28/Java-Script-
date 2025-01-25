// API calls

const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL); // jaise hi ye line execute hoga waise hi ek request chlaa jaayega iss URL pr aur wo ek promise return karega jo ki hum ek variable mein store kraa sakte hai
// console.log(promise);

const btn = document.querySelector("#btn");
const factPara = document.querySelector(".fact");
factPara.style.color = "red";



const getFacts = async () => {
    console.log("Getting data .... ");
    let response = await fetch(URL);
    console.log(response);   //JSON format
    let data = await response.json();  // it returns second promise
    console.log(data[1].text);
    factPara.innerText = data[1].text;
}; 

btn.addEventListener("click",getFacts);