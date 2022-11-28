// 1.  maximum element occurance count 
// Given an array, find the most frequent element in it. If there are multiple elements that appear a maximum number of times, print any one of them.

// Input : let arr = [1,2,3,4,1,2,5,8,1]
// Output : 1
// Explanation: 1 appears three times in array which is maximum frequency.

// let arr = [1,2,3,4,1,2,5,8,1]

// let fc = {}

// for (let i = 0; i < arr.length; i++) {
//     fc[arr[i]] = (fc[arr[i]] || 0) +1
// }
// let ans 
// let max = -Infinity
// for(let key in fc){
//     if(max<fc[key]){
//         max = fc[key]
//         ans = key
//     }
// }
// console.log(fc, ans, max);

//-------------------------------------------- brute force

let arr = [1,2,3,4,1,2,5,8,1]
let visited = new Array(arr.length)
let max = -Infinity
let ans

for (let i = 0; i < arr.length; i++) {
    if(visited[i]) continue
    let count = 1
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i] == arr[j]){
             visited[j] = 1
            count++
        }
    }
    if(max < count){
        max = count
        ans = arr[i]
    }
    console.log(arr[i], count, );
}
console.log(visited, ans , max);