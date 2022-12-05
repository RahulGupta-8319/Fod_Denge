// 5.  print the array index recursionally 
// 6.  print the array element countdown recursionally

let arr = [1, 2, 3, 2, 2, 5]
let target = 2

console.log(findIndex(arr,target));
function findIndex(arr, target){
    
    let res = []
    for(let i in arr){
        if(arr[i] == target){
            res.push(i)
        }
    }
   return res 
}