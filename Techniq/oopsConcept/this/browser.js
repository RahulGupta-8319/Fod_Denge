// inside browser

//                                           normal mode                 'use strict'
// 'use strict'

console.log(this);                          //  window                    // window

// function myfn(){
//     console.log(this);
// }
// myfn()                                  // window                     // undefined

// let obj = {
//     name:"tom",
//     age:20,
//     myfn1: function (){
//         console.log(this);
//     }
// }
// obj.myfn1()                             // object itself             // object itself

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
// obj.myfn2()                             // window                  // undefined