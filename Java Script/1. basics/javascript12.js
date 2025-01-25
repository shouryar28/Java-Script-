// /* Functions in Java Script
//    ------------------------
//    */
//   function myFunction(){
//     console.log("Welcome to Hell")
//     console.log("Now Go into it")
//   }

//   myFunction();
//   myFunction();
//   //Function helps in reduce redundancy



//   function myfunction(msg){
//      //parameter -> Input
//      console.log(msg);
//   }

//   myfunction("थोड़ी मस्ती थोड़ा सा ईमान बचा पाया हूँ,ये क्या कम है मैं अपनी पहचान बचा पाया हूँ ,कुछ उम्मीदें, कुछ सपनें, कुछ महकती यादें,जीने का मैं इतना ही सामान बचा पाया हूँ।") ;



//   function sum(x , y) {
//     s = x + y;
//     return s;
//     //after writing return statement nothing can be executed after that from the function. 
//   }
//   console.log(sum(33,36));

//   // Arrow Function ------------------IMPORTANT

//   const arrowSum = (a,b) => {
//     console.log(a + b);
//   }
//   //In console just write arrowSum(4,5)

//   const arrowMul = (c,d) => {
//     console.log(c*d);
//   }
//     //In console just write arrowMul(4,5)


//     const printHello = () => {
//         console.log("Hello World")
//     } 

// function countVowel(str){
//   let count = 0;
//   for(let i of str){
//     if(i === "a" || i === "e" ||i === "i" ||i === "o" ||i === "u"){
//         count++;
//     }
//   }
//   return count;
// }
  //Note :- This will not work for capital letters.. Because js is a case sensitive language.


  // Same question with arrow array

  const countVowel = (str) => {
    let count = 0;
    for(let i of str)
    {
      if(i === "a" || i === "e" ||i === "i" ||i === "o" ||i === "u"){
        count++;
      }
    }
    return count++;
  }
 
  console.log(countVowel("deewana tera tujhe hi bulaye"))


