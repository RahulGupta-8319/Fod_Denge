//================================ Recursion

// let n = 5

// console.log(nSum(n));
// function nSum(n){
//     //base 
//     if(n==0) return ""

//     //recursive
//     return n+nSum(n-1)
// }

//-------------------------------- factorial

// let n = 10

// console.log(fact(n));
// function fact(n){
//     // base
//     if(n==1) return 1

//     //recursive
//     return n*fact(n-1)
// }

//---------------------------------- fibonacci

// let n = 8 // [0,1,1,2,3,5,8,13,21]

// console.log(fib(n));

// function fib(n){
//     //base
//     if(n<=2) return 1

//     //recursive
//     return fib(n-2)+fib(n-1)
// }

//-------------------------------- pow

// let base = 3
// let exponential = 5

// console.log(power(base,exponential));

// function power(b,e) {
//     //base
//     if(e==0)  return 1

//     //recursive
//     return b*power(b,e-1)
// }

//------------------------------- reverse string

// let str = "hello"  //"olleh"

// console.log(reverse(str));

// function reverse(str){
//     //base
//     if(str.length == 0) return ""

//     //recursive
//     return  reverse(str.slice(1))  + str[0]
// }

//---------------------------------  IsPalindrome

// let str = 'hi'

// console.log(isPalindrom(str));

// function isPalindrom(str){
//     //base
//     if(str.length == 1) return true

//     //recursive
//     return (str[0] == str[str.length-1]) && isPalindrom(str.slice(1,-1))
// }

//--------------------------------  flatten Array

// let arr = [1,2,3,[4,[5,6]]]

// console.log(flattenArr(arr));

// function flattenArr(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])  == false){
//             res.push(arr[i])
//         }else{
//              res = res.concat(flattenArr( arr[i] ))
//         }
//     }  
//     return res 
// }
