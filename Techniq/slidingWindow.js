//============================== SLIDING WINDOW =============================

//we create window - 1.fixed size
//                    2.variable size

// Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.
//========================== fixed size window 

// let N = 4, K = 2
// let Arr = [100, 200, 300, 400]
// // Output: 700
// console.log(maxsum(Arr,K,N));

// function maxsum(arr,k,n){
//     let currSum = 0
//     for(let i=0; i<k; i++){
//         currSum += arr[i]
//     }
//     let finalSum = currSum
    
//     for(let i=k; i<n; i++){
//         currSum += arr[i]-arr[i-k]
//         // console.log(currSum);
//         if(currSum > finalSum){
//             finalSum = currSum
//         }
//     }
//     return finalSum
// }

//================================== Variable size window
// LC=>3. Longest Substring Without Repeating Characters Medium

let str = "abcabcbb"
// Output: 3
console.log( largestSum(str) )
function largestSum(str){
    let s =0
    let res = {}
    let len = 0
    for(let e=0; e<str.length; e++){
       while(res[str[e]] == 1){
        res[str[s]] = 0
         s++
       }
       res[str[e]] = 1

      len = Math.max(len, e-s+1)
      console.log('len', len);

    }
    console.log(len);
    return len

}
