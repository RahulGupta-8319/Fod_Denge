
// let arr = [2,3,8,9,12,15]
// - given array find pair sum which is equal to k = 17
// # brute force approach 
//           -TC = o(n^2)
//           - SC = o(1)

// let k = 1
// let l = arr.length

// let pairSum = function(arr,k,l){
//     for (let i = 0; i < l; i++) {
//         for (let j = i+1; j <l; j++) {
//           if(arr[i]+arr[j] == k) return [arr[i],arr[j]]     
//         }       
//     }
//     return false
// }
// console.log(pairSum(arr,k,l));
//------------------------ optimization -------------------------------
// let pairSum = function(arr,k,l){
    
//     let s = 0
//     let e = l-1
//     while(s<e){
//         if(arr[s]+arr[e] == k) return [arr[s],arr[e]] 
//         if(arr[s]+arr[e] > k){
//             e--
//         }else{
//             s++
//         }
//     }
//     return -1
// }
// console.log(pairSum(arr,11,l));

//******************************************************* */
//- sum pair closesd to x
let arr = [2,3,8,9,12,15]
let k = 25
let l = arr.length
let pairSum = function(arr,k,l){

    let s =0
    let e = l-1
    let a , b
    let diff = Infinity 
    while(s<e){
        if(arr[s] + arr[e] == k) return [arr[s],arr[e]]

        let currDiff = Math.abs(arr[s]+arr[e] - k)

        if(currDiff < diff){
            diff = currDiff
            a=arr[s]
            b=arr[e]
        }

        if(arr[s] + arr[e] > k){
            e--
        }else{
            s++
        }

    }
    return [a,b]
}
console.log(pairSum(arr,k,l));

// leetcode --1163

