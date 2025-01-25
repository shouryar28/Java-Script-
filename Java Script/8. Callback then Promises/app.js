// callback is method in which ek function ke andar hum dusrafunction call karte hai

// function sum(a,b) {
//    console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a,b);  //call backing sum function
// }
// calculator(1,2,sum);

// Now print 1 and then 2 , keep a gap of 2 seconds

// function getData(dataId,getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1, () => {
//     console.log("Getting data 2 ......")
//     getData(2, () =>{
//         console.log("Getting data 3 ......")
//         getData(3, () => {
//             console.log("Getting data 4 .....")
//             getData(4);
//         });
//     });
// });

// above callbacks are known as callback hell which are forming pyramid like structure
//-------------------------------------------------------------------------
// to overcome from this callback hell we will use promise

// promise have three states : pending,fullfilled,rejected

// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     // resolve("The promise is fullfilled"); 
//     reject("Some error occured");   // the error message will be shown as error in console window    
// })  

// huum as such khud promise create nhi karte hai , API hume promises return karti hai as well as uske andar jo resolve aur reject hota hai wo bhi whi return karte hai

// function getData(dataId,getNextData) {  --  maan lete hai ki data API ke throgh aati hai  too wo directly values naaa return kar wo hume promises return karti hai aur hume uss promises se value ko fetch karna hota hai
//     //2s
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject) => { // ye vada kar rha ki 7 sec baad ye humko data de dega
//         setTimeout(() =>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },7000)
//     })
// }
// firstly it will show pending if we type result i.e variable it can be any
// but after 7 seconds it will be fullfilled



// ________________________ promise.then, promise.catch _______________

// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("due to network error");
//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fullfilled",res);
// });
// promise.catch((err) => {
//     console.log("rejected",err)
// })



// function asyncFunc() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("data1");
//         resolve("success");
//     },4000);
//   });  
// }

// function asyncFunc2() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("data2");
//         resolve("success");
//     },4000);
//   });  
// }



// console.log("fetching data1 ...")
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log("fetching data2 ...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {})
// });

// console.log("fetching data2 ...")
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });


// by promise chain ,, pehle isko callback hell se kiye the

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject) => { // ye vada kar rha ki 7 sec baad ye humko data de dega
//         setTimeout(() =>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },3000)
//     })
// }

// // getData(1).then((res) => {   //this is not a right way of promise chaining
// //     console.log(res);
// //     getData(2).then(() => {
// //         console.log(res);
// //     })

// // })

// getData(1)
// .then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });                     // this is promise chaining
  
// compare with callback hell 

// getData(1, () => {
//     console.log("Getting data 2 ......")
//     getData(2, () =>{
//         console.log("Getting data 3 ......")
//         getData(3, () => {
//             console.log("Getting data 4 .....")
//             getData(4);
//         });
//     });
// }); 



//      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Async and Await   !!!!!!!!!!!!!!!!!!!!

async function hello(){
    console.log("hello");
}    // automatically returns a promise

// Now "await" 
// it pauses the execution of its surrounding async function until the promise is settled

function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
        resolve(200); // 200 represents a success
        },2000);
    });
} 

// await api();      we cannot directly use this 

async function getWeatherData(){
    await api();   //1st call
    await api();   //2nd call
}


function getData(dataId){
   return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("data", dataId);
        resolve("success");
    },2000);
   });
}


// Async - await
async function getAllData(){
    console.log("getting data 1 ...")
    await getData(1);
    console.log("getting data 2 ...")
    await getData(2);
    console.log("getting data 3 ...")
    await getData(3);
    console.log("getting data 4 ...")
    await getData(4);
}
// ismein humlog ko ek alag se function bna kar usko call karna pad rha hai jo ki hum usse bhi short form mein kaam nikaal sakte hai


// by
// IIFE : Immediate Invoked function Expression

(async function (){
    console.log("getting data 1 ...")
    await getData(1);
    console.log("getting data 2 ...")
    await getData(2);
    console.log("getting data 3 ...")
    await getData(3);
    console.log("getting data 4 ...")
    await getData(4);
})();




































// ----------------------------- GPT explained ------------------

// // A callback is a method where one function is passed as an argument to another function 
// // and is executed within the outer function.

// // Example of using a callback:
// function sum(a, b) {
//     console.log(a + b); // Prints the sum of 'a' and 'b'.
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);  // Calls the 'sum' function passed as a callback.
// }
// calculator(1, 2, sum);  // Output: 3

// // ----------------------------------------------------------------------
// // Example: Printing 1 and 2 with a gap of 2 seconds using callbacks.

// // Function to simulate fetching data with a delay using callbacks.
// function getData(dataId, getNextData) {
//     // Simulate a 2-second delay.
//     setTimeout(() => {
//         console.log("data", dataId); // Log the current data ID.
//         if (getNextData) {
//             getNextData(); // Call the next function if provided.
//         }
//     }, 2000);
// }

// // Example of callback hell: Nested callbacks forming a pyramid structure.
// getData(1, () => {
//     console.log("Getting data 2 ......");
//     getData(2, () => {
//         console.log("Getting data 3 ......");
//         getData(3, () => {
//             console.log("Getting data 4 .....");
//             getData(4);
//         });
//     });
// });
// // This nested structure is known as "callback hell" and can make the code harder to read and maintain.

// // ----------------------------------------------------------------------
// // To overcome callback hell, we can use Promises.

// // Promises provide a better way to handle asynchronous operations 
// // by avoiding deeply nested structures.
// // A promise has three states:
// // 1. Pending: Initial state, neither resolved nor rejected.
// // 2. Fulfilled: The operation is completed successfully.
// // 3. Rejected: The operation has failed.

// // Creating a promise example:
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // Simulate resolving or rejecting the promise.
//     // Uncomment one of the lines below to see the respective behavior:

//     // resolve("The promise is fulfilled"); // Successfully resolves the promise.
//     reject("Some error occurred"); // Rejects the promise with an error message.
// });

// // Typically, we don't manually create promises. Instead, APIs return promises
// // that we can use to fetch data or handle results.
// // The `resolve` and `reject` methods are also handled internally by the API.

// // ----------------------------------------------------------------------
// // Explanation: Assume we are fetching data via an API.
// // Instead of directly returning values, the API returns promises,
// // and we fetch the values from those promises.

// function getDataWithPromise(dataId) {
//     // Returning a promise that resolves after a 2-second delay.
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("data", dataId); // Log the current data ID.
//             resolve(); // Resolve the promise to indicate the operation is complete.
//         }, 2000);
//     });
// }

// // Using promises to handle asynchronous operations in a cleaner way.
// getDataWithPromise(1)
//     .then(() => {
//         console.log("Getting data 2 ......");
//         return getDataWithPromise(2);
//     })
//     .then(() => {
//         console.log("Getting data 3 ......");
//         return getDataWithPromise(3);
//     })
//     .then(() => {
//         console.log("Getting data 4 ......");
//         return getDataWithPromise(4);
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error); // Handle any errors.
//     });
