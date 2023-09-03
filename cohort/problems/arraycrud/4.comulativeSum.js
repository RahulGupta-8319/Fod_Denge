// associative array = the apecial type of array where we can give name of the the indexing
// js doesn't support associative array

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46; 

// console.log(person);
// 4. Return an array showing the cumulative sum at each index of an array of integers

let arr = [1, 3, 5, 7];

const comulativeSum = (arr) => {
  let ans = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    ans.push(sum);
  }
  console.log(ans);
};

console.log(comulativeSum(arr));

