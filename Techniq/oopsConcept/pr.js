// let arr= [
//     {
//         id:1,
//         name: 'Yuvraj',
//     },
//     {
//         id:2,
//         name: 'Aaditya',
//     },
//    {
//         id:3,
//         name: 'Raj',
//     }
// ];

arr.sort(
    (a,b) => localCompare
)
// // console.log(arr);
// let res = []
// for(let i=0; i<arr.length;i++){
//     // console.log(arr[i].name);
//     res.push(arr[i].name)
// }
// console.log(res);

// let arr = [1,2,3,4,5,6,7,8,9,0]
// let sum = 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i] %2 != 0){
//         // console.log(arr[i]);
//         sum += arr[i]
//     }

// }
// console.log(sum);

//=======================================

let arr = [1,26,13,47,51,96,72,8,99,0,78]

let newArr = [...arr, 78]

console.log(newArr);

console.log(arr.indexOf(26));

// arr.sort( (a,b) => a-b)

// let max = -Infinity
// for(let i=0; i<arr.length; i++){
//     if(arr)
// }

// let res = Math.max(...arr)
// console.log(res);

const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    console.log('ok');
})

const mongoose = require("mongoose")

mongoose.connect("url",{
    useNewUrlParser:new
})

const express = require('express')
const app = express()

app.listen(3000, ()=> console.log('server is runnig'))