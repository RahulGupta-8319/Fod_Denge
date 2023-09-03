
// let min = 1, max = 5000

// let x = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(x);

// function countup(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countup(n - 1);
//         countArray.push(n);
//         return countArray;
//     }
// }    

// function countdown(n, newArr = []) {
//     if (n < 1  ) {
//         return newArr;
//     }
//     newArr.push(n);
//     return countdown(n - 1, newArr)
// }

// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum, ans = []) {

    if(startNum>endNum){
      return ans
    }else{
      ans.push(startNum)
      rangeOfNumbers(startNum + 1, endNum, ans)
    
    }
};

console.log(rangeOfNumbers(1,5));

