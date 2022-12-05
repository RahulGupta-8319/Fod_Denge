//================== Two Pointer

// create more than one pointer 
// always use while loop for handling pointer
// only sorted array we can apply

// let arr = [2,3,5,6,7,8]
// let sum = 11  

// function twoSum(arr,sum){   
//     let s = 0
//     let e = arr.length-1
//     while(s<e){
//         if(arr[s]+arr[e] == sum){
//            return [arr[s],arr[e] ]
//         }else if(arr[s]+arr[e] > sum){
//             e--
//         }else{
//             s++
//         }
//     }
// }
// console.log(twoSum(arr,sum));


//======================sum pair closest to x

let arr = [2,5,6,7,9,10,29,40]
let x = 20

function sumPair(arr,x){          //40 + 2 = 42
    let s = 0
    let e = arr.length - 1
    let currentSum = 0
    let a,b
    let res = Infinity
    while(s < e){
        currentSum = arr[s]+arr[e]
        let diff = Math.abs(currentSum - x)
        if(diff<res){
            res = diff
            a= arr[s]
            b=arr[e]
        }
        if(currentSum == x){
            return [arr[s],arr[e]]
        }else if(arr[s]+arr[e] > x){
            e--
        }else{
            s++
        }
    }
    return [a,b]
}
console.log(sumPair(arr,x));


