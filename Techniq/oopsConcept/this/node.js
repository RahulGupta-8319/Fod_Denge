// this = > that's a tool to help us to refrence to an particular object 
//          in diff diff situation it refer to diffent object..

//==> 

//                                           normal mode              'use strict'

// console.log(this);                        //  {}                    // {}

// function myfn(){
//     console.log(this);
// }
// myfn()                                   // global object          // undefined

// let obj = {
//     name:"tom",
//     age:20,
//     myfn1: function (){
//         console.log(this);
//     }
// }
// obj.myfn1()                              // object itself         // object itself

// let obj = {
//     name:"tom",
//     age:20,
//     myfn2: function (){
//         function myfn3(){
//             console.log(this);
//         }
//         myfn3()
//     }
// }
// obj.myfn2()                              // global object          // undefined