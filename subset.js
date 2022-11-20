var subsets = function(nums) {
    console.log(nums);
    let arr = [[]]
       for(let i = 0 ; i<nums.length; i++){
        console.log("ok");
           for(let j =i; j<nums.length; j++){
               let arr1 = []
               for(let k = i ; k<=j; k++){
                 arr1.push(nums[k])
                //  console.log(nums[k]);
               }
               arr.push(arr1)
           }
       }  
       console.log(arr)
       return arr
}

subsets([1,2,3])
