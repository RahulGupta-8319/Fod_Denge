//=========================== BUBBLE SORT

let arr = [2,7,9,8,11,13,15,35,1]//[0,1,2,3,4,5,6]
let n = arr.length
console.log(bubble(arr,n));
function bubble(arr,n){

    for (let i = 0; i < n; i++) {
        let flag = 0
        for (let j = 0; j < n-i; j++) {
            if(arr[j] > arr[j+1]){
                //swap
                arr[j] = arr[j] + arr[j+1]
                arr[j+1] = arr[j] - arr[j+1]
                arr[j] = arr[j] - arr[j+1]
                flag= 1
            }
            
        }
        if(flag == 0){
            break;
        }
        
    }
    return arr

}