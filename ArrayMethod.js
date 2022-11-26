//======================== At

// let arr = [1,2,4,8,9]
// let res = arr.at(1)   //take index return value
// console.log(arr,res)  //[ 1, 2, 4, 8, 9 ] 2


// ======================= pop

// let arr = [1,2,4,8,9]
// let res = arr.pop()   //return last index and decrease the length of array
// console.log(arr,res)  // [ 1, 2, 4, 8 ] 9

// ========================= push    

// let arr = [1,2,4,8,9]
// let res = arr.push(8,9,5,4,-8,0)   //insert the new element inside the array and increase the length of the array 
// console.log(arr,res)    // return array length and insert multiple element

// =============================fill

// let arr = [1,2,4,8,9]
// let res = arr.fill(1,2,4)   // its change the main array and fill
// console.log(arr,res) //[ 1, 2, 1, 1, 9 ] [ 1, 2, 1, 1, 9 ]

// fill(value)
// fill(value, start) start default value 0
// fill(value, start, end) end default value length

//=============================== join

// let arr = [1,2, 4,8,9]
// let res = arr.join(" 5")   // convert array into string
// console.log(arr,res)  // [ 1, 2, 4, 8, 9 ] 1 52 54 58 59

//==============================  shift

// let arr = [5,1,2,4,8,9]
// let res = arr.shift()   // its remove first element from main array return removing element
// console.log(arr,res)

//=========================== unshift

// let arr = [1,2,4,8,9]
// let res = arr.unshift(1,2,4)   // its insert the given element in first index and return length of the array
// console.log(arr,res)

//=========================== reverse

// let arr = [1,2,4,8,9]
// let res = arr.reverse()   // its reverse the main array not create copy 
// console.log(arr,res)   //[ 9, 8, 4, 2, 1 ] [ 9, 8, 4, 2, 1 ]

//=========================== includes

let arr = [1,2,4,8,9]
let res = arr.includes(1)   // return type boolean true/false
console.log(arr,res)        //[ 1, 2, 4, 8, 9 ] true



