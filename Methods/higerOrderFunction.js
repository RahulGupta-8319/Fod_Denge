// ====================== Map ====================    TC = O(N)
//  let arr = [2,5,6,2,3]   //length 05

// let newArr = arr.map((e,i,arr)=>{ 
//     console.log(i,arr);
//     // console.log(thisArg);
//     return e + 2})

// console.log(newArr)  //[ 4, 10, 12, 4, 6 ]
// console.log(arr)    // [ 2, 5, 6, 2, 3 ]

// ===================== Filter ===================    TC = O(N)
// let arr = [ 4, 10, 12, 4, 6 ]   //length 05

// //let newArr = arr.filter((e)=> e < 10 && e > 4)  //[ 6 ]   // length reduce using filter

// let newArr1 = arr.filter(function (e,i,arr){
//     console.log(i,arr);
//     return e <= 10 && e >= 4             
// })
// console.log(newArr1) //[ 4, 10, 4, 6 ]
// console.log(arr)  //[ 4, 10, 12, 4, 6 ]

// =================== some =======================  TC = O(N)

// let arr = [2,5,6,2,3]   

// let newArr = arr.some((e,i,arr)=>{ 
//     console.log(i,arr);
//    return e > 11
// })    //return type Boolean

// console.log(newArr)  // false     if any condition match its return true
// console.log(arr)   //[ 2, 5, 6, 2, 3 ]

// ==================== every ===================    TC = O(N)

// let arr = [2,5,6,2,1,3]   

// let newArr = arr.every((e,i,arr)=>{ 
//     console.log(i,arr);
//     return e >= 2})    //return type Boolean

// console.log(newArr)  // fale     if each every condition match its will be retrun true
// console.log(arr)   //[ 2, 5, 6, 2, 3 ]

// ============================ Find ===========================  TC = O(N)

// let arr = [2,5,6,2,3]   

// let newArr = arr.find((e)=> e > 2)   

// console.log(newArr) //5    //The find() method returns the first element in the provided array that
//                           // satisfies the provided testing function.
//                           // If no values satisfy the testing function, undefined is returned.
// console.log(arr)   //[ 2, 5, 6, 2, 3 ]

// ===================== find Index =================================  TC = O(N)

// let arr = [2,5,6,2,3]   

// let newArr = arr.findIndex((e)=> e > 2)   

// console.log(newArr) // 1    its return only Index of given condition if no condition match its return -1
// console.log(arr)   //[ 2, 5, 6, 2, 3 ]

// ========================sort===================================  TC = O(N logN)

// let arr = ["azf","zpbhgepwj","owdhbjhb","pjxwq"] 


// arr.sort((a,b)=> a-b)
// console.log(arr)      //[ 2, 2, 3, 5, 6 ]
// arr.sort((a,b)=> b-a) 
// console.log(arr)           // its not create copy its change the main array

// // arr.sort((a, b) => (a < b ? -1 : 1))  //[ 'z', 'p', 'o', 'a' ] 
// // arr.sort().reverse() //[ 'z', 'p', 'o', 'a' ]

// // // console.log(newArr1) 
// // console.log(arr)   //[ 2, 5, 6, 2, 3 ]

// ============================ ForEach ========================   TC = O(N)
// let arr = [2, 5, 6, 2, 3]
// let newArr = arr.forEach((e, i, arr) => {
//     console.log(e * 2, i, arr), console.log(e)
// }

// )
// console.log(newArr, arr)

// ====================== reduce ======================     TC = O(N)
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => { console.log(previousValue,currentValue)
    return (previousValue * currentValue)
  },
  initialValue
);

console.log(sumWithInitial,array1);