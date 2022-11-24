// var subsets = function (nums) {

//   let arr = [[]];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       let arr1 = [];
//       for (let k = i; k <= j; k++) {
//         arr1.push(nums[k]);
//         //  console.log(nums[k]);
//       }
//       arr.push(arr1);
//     }
//   }
//   console.log(arr);
//   return arr;
// };

// subsets([1, 2, 3]);

//-----------------------------------------subString

var subString = function (nums) {

    let arr = [[]];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j <= nums.length; j++) {
        console.log( nums.substring(i,j) )
      }
    }
    return arr;
  };
  
subString("abc");
