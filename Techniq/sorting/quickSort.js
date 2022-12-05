let arr = [10,80,30,90,40,50,70];
let n = arr.length;

quickSort(arr, 0, n-1);
console.log(arr);
function quickSort(arr, l, h) {
  if (l < h) {
    let pi = partitian(arr, l, h);

    quickSort(arr, l, pi - 1);
    quickSort(arr, pi+1, h);
  }
}

function partitian(arr, l, h) {
  let pivot = arr[h];
  
  let i = l - 1;
  for (let j = l; j < h; j++) {
      if (arr[j] < pivot) {
      i++;
      //swap
      swap(arr, i, j);
    }
}
//swap
swap(arr, i + 1, h);
console.log(arr);
  return (i + 1);
}
function swap(arr, i, j) {
  let tamp = arr[i]
  arr[i] = arr[j]
  arr[j] = tamp
}
