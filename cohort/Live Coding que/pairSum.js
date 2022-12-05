// 3. find a pair exist of a given sum or not (multiple pointer)
// Given an array A[] of n numbers and another number x, 
// the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 
let arr = [1,2,3,4,5,6]
let k = 7
hasArrayTwoCandidates(arr,6,k)

function hasArrayTwoCandidates(arr,n,x){
    //code here
    arr.sort((a,b) => a-b)
    
    let s=0
    let e=n-1
    let res = []
    while(s<=e){
        if(arr[s] + arr[e] == x){
            res.push([arr[s], arr[e]])
        }
        if(arr[s] + arr[e] > x){
            e--
        }else{
            s++
        }
    }
    
    console.log(res)
    
}
