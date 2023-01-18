// 7. Find all pairs in an array of integers whose sum is equal to a given number

let arr = [1,5,6,1,0,1]
let k = 6

function findPairSum(arr, k){
    let map = {}
    let res = []

    for(let i=0; i<arr.length; i++){

        let targetValue = k - arr[i]
         
        if(map[targetValue]){
            res.push(arr[i], targetValue)
            break
        }
            map[arr[i]] = true

    }
    return res
}

console.log(findPairSum(arr, k));