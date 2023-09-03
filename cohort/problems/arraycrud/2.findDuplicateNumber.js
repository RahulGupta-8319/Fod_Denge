// 2. Find a duplicate number in an array of integers

// const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];

// function findDuplicateNo1(arr) {
//   let map = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (map[arr[i]]) {
//       return arr[i];
//     } else {
//       map[arr[i]] = 1;
//     }
//   }
//   return false
// }

// console.log(findDuplicateNo1(arr));

//====================================================

const arr =[1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];

function findDuplicateNo1(arr) {
  let map = {};

  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      res.push(arr[i])
    } else {
      map[arr[i]] = 1;
    }
  }
  return res
}

console.log(findDuplicateNo1(arr));