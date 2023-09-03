
let arr = [1, 2,3, 4, 5,2,1]
let k = 3.5
closest(arr, k)
function closest(arr, target){
    let ans = arr[0]
    let index = 0
    let prev = arr[0]
    // arr.sort((a,b)=>a-b)
// console.log(arr);
    for(let i=0; i<arr.length; i++){

        let a = Math.abs(target - ans)
        let b = Math.abs(target - arr[i])
        if(b<=a){
            prev =ans
            ans = arr[i]
            index = i
        }
        if(prev > ans){
            console.log(prev)
        }else{

        }
    }
    console.log( ans, prev);

}