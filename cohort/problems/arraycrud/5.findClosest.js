//8. Given an array of sorted integers. We need to find the closest value to the given number. Array may contain duplicate values and negative numbers. 

let arr = [1, 2, 4, 5,10, 6, 6, 8, 9,]
let k = 11

function closest(arr,target){
    let ans = arr[0]

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] == k) return k

        if(Math.abs(target-ans) > Math.abs( target-arr[i] ) ){
            ans = arr[i]
        }
    }
 
    return ans

}

console.log(closest(arr,k));