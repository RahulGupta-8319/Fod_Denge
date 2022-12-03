// problems for frequency counter method
/*
let map = new Map()      
map.name = "rahul"
console.log(map);   //Map(0) { name: 'rahul' }

map.set("age", 22)
map.set("age", 226)

console.log(map);   //Map(1) { 'age' => 22, name: 'rahul' }

let x = map.get("age")
console.log(x);      //22

let y = map.has("age")
console.log(y);         //true
*/
//============================== map itration
// let arr = [1,2,7,3,4,2,1]
// let map = new Map()

// for (let i = 0; i < arr.length; i++) {
//     let x =arr[i]
//     if(map.has(x)){ // already present
//         map.set(x, map.get(x)+1)

//     }else{   //not present
//         map.set(x, 1)
//     }  
// }

// map.forEach((value , key) =>
// console.log("key:", key, "value:", value)
// )
// console.log(map);

//==================== maximum repeating number
// => gfg.>> 
// let arr = [1,2,3,4,3,2,1,2,3,2]
 
// maxRepeating(arr , 10 , 9)
//  function maxRepeating(arr,n,k){
//     //code here
    
//     for(let val of arr){
//         if( map.has(val) ){
//             map.set(val, map.get(val)+1)
//         }else{
//             map.set(val, 1)
//         }
//     }
//     let maxFreq =0
//     let ans = 0
//     map.forEach((val, key)=>{
//         if(val > maxFreq){
//             maxFreq=val
//             ans=key
//         }else if(val == maxFreq){
//             if(key < ans){
//                 ans=key
//             }
//         }
        
//     })
    
//     console.log(map, ans)
//     return ans
      
// }  let map = new Map
  

//===========================

//gfg..>> find duplicate in an array

// let arr = [1,2,3,4,1,22,3]
// n = arr.length
// findDup(arr, n)
// function findDup(arr){
//     let map = new Map
//     for(let val of arr){
//         if(map.has(val)){
//             map.set(val, map.get(val)+1)
//         }else{
//             map.set(val, 1)
//         }
//     }
//     let ans =[]
//     map.forEach((val, key) =>{
//         if(val>1){
//             ans.push(key)
//         }   
//     })
//     if(ans.length == 0) return -1
//     console.log(map, ans);
//     return ans
// }

// ==================================== 

//find pair sum
// let arr =[1,2,3,5,3,1,7]
// let n = arr.length
// let k = 6
// getPairsCount(arr, n, k)
// function getPairsCount(arr,n,k){
//     //code here
//     let ans=0
//     let map = new Map
//     for(let i=0; i<n; i++){
//         let x=arr[i]
//         let y=k-x
//         if(map.has(y)){
//             ans=ans+map.get(y)
//         }
        
//         if(map.has(x)){
//             map.set(x, map.get(x)+1)
//         }else{
//             map.set(x,1)
//         }
//     }
//     console.log(ans)
//     return ans
//  }

//==========================================
//leetcode fizzbuzz
// let n = 10
// console.log(fizzBuzz(n));
//  function fizzBuzz(n) {
//     let ans =[]
//     for(let i=1; i<=n; i++){
//         if(i%3==0 && i%5==0){
//             ans.push("FizzBuzz")
//         }else if(i%3 ==0){
//             ans.push("Fizz")
//         }else if(i%5 ==0){
//             ans.push("Buzz")
//         }else{
//             ans.push(i+"")  //typrcast into string
//         }
//     }
//     return ans
// };

//=================================
// --->> check number is integer or not

// let x= NaN

// if(typeof x=='number' && !isNaN(x)){
//     //check if it is a integer
//     if(Number.isInteger(x)){
//         console.log(`${x} is integer`);
//     }else{
//         console.log(`${x} is float value`);
//     }
// }else{
//     console.log(`${x} is not a integer`);
// }
// console.log(typeof NaN);
  
//====>> by regex

// let regex= /^[0-9]+$/

// let check = regex.test(x)

// if(check){
//     console.log(`${x} is an integer`);
// }else{
//     console.log(`${x} is  float`);

// }


