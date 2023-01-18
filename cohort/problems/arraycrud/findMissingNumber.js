// Find the missing number in a given integer array of 1 to 100

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function findMissingNo1(arr) {
  let sum = 0;
  let n = arr.length + 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let nSum = (n * (n + 1)) / 2;
  console.log(sum, nSum);
  return nSum - sum;
}

// console.log(findMissingNo1(arr));

const findMissingNo2 = (arr) =>{

    let n = arr.length

    for (let i = 0; i < n; i++) {
        if(arr[i]+1 != arr[i+1]){
            return arr[i]+1
        }
    }
}

console.log(findMissingNo2(arr));
