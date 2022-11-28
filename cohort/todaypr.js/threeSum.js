// 4. three sum by multipointer

let arr = [1,2,3,4,5,6,7,8,9]
let target = 25
console.log(threeSum(arr,target));
function threeSum(arr,target){
    let i =0
    let j = i+1
    let k = arr.length-1
    let res = []
    while(j<k){
        if(arr[i] + arr[j] + arr[k] == target){
          res.push(arr[i] , arr[j] , arr[k] )
          return res
        }
        if(arr[i] + arr[j] + arr[k] > target){
            k--
        }else{
            i++
            j++
        }
    }

    return "not available"
}