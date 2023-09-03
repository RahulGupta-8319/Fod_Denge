let arr = [1,2,3,4,3,2,6,54,35]

//insertion
/*

arr.push(34)
arr.unshift("jitu bhai")
arr.splice(1,0, "sang" , "swati")
console.log(arr);

//======================================

//deletion

arr.pop()
arr.shift()
arr.splice(2)
let x = arr.slice(1,2)
console.log(arr, x);      
 */

//============================================

//sortingg

// let arr = [1,2,3,4,3,2,6,54,35]
//==>> sort fn

// arr.sort( (a,b) => a-b )
// console.log(arr);

// by bubble sort
// bubbleSort(arr)
// function bubbleSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let flag = 0
//         for (let j = 0; j < arr.length-1; j++) {
//             if(arr[j] > arr[j+1]){
//                  arr[j] = arr[j]+arr[j+1]
//                  arr[j+1] = arr[j]-arr[j+1]
//                  arr[j] = arr[j]-arr[j+1]
//                  flag = 1
//             }

//         }
//         if(flag ==0) break

//     }
//     console.log(arr);
// }

//==============================================

//searching

// let array = [1,2,3,4,3,2,6,54,35]
// let target = 3

// for (let i = 0; i < array.length; i++) {
//     if(array[i] == target){
//         console.log(i);
//         break
//     }

// }

//============================================

//rotateting

// let array = [1, 2, 3, 4, 3, 2, 6, 54, 35];   // 6 54  35 1 2 3 4 
// let k = 3;

// for (let i = 0; i < k; i++) {   // brute force
//     let last = array.pop()
//     array.unshift(last)
// }

// function reverse(array, s ,e){
//     let arr =[]
//     for (let i = e; i >= s; i--) {
//         arr.push(array[i])
//     }
//     return arr
// }

// function reverse(array, s, e) {
//   while (s < e) {
//     array[s] = array[s] + array[e];
//     array[e] = array[s] - array[e];
//     array[s] = array[s] - array[e];
//     s++;
//     e--;
//   }
//   return array;
// }

// function optimise(array, k) {
//   let n = array.length;
//   reverse(array, 0, n - 1);

//   reverse(array, 0, k - 1);

//   reverse(array, k, n - 1);

//   console.log(array);
// }
// optimise(array, k);

//==========================================

// merege 

// let arr1=[1,3,4,]
// let arr2=[2,5,7,8]

// brute force 
/**
 *  create [] concate both array
 *  sort the new aaray
 */

//optimsie
let arr1=[1,3,4,]
let arr2=[2,5,7,8]

// let arr = []

let i=0
let j=0
let k=0

while(i<arr1.length && j<arr2.length){
    if(arr1[i] <= arr2[j]){
        arr[k] = arr1[i]
        i++
        k++
    }else{
        arr[k] = arr2[j]
        k++
        j++ 
    }
}
while(i<arr1.length){
    arr[k]=arr1[i]
    k++
    i++
}
while(j<arr2.length){
    arr[k]=arr2[j]
    k++
    j++
}

// console.log(arr);

