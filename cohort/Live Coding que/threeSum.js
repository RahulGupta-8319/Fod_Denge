// 4. three sum by multipointer

let arr = [-4,-1,-1,0,1,2]       //[-1,0,1,2,-1,-4]
let target = 0
console.log(threeSum(arr,target));
function threeSum(arr) {

    arr.sort((a,b) => a-b)

    let j = 0
    let k = 0
    let res = []
    for(let i=0; i<arr.length; i++){
            if (i > 0 && arr[i] === arr[i - 1]) continue;

            j = i+1
            k = arr.length-1
       while(j<k){
          if(arr[i] + arr[j] + arr[k] == 0){
            res.push([ arr[i] , arr[j] , arr[k] ])
              while (j < k && arr[j] === arr[j + 1]) j++;
              while (j < k && arr[k] === arr[k - 1]) k--;

          }
          if(arr[i] + arr[j] + arr[k] > 0){
              k--
          }else{
             j++
          }
        }
    }
    console.log(res)
    return res
    
};