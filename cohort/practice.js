// let arr = [1,2,3,4,5,6,7,8]
// let k=4
// findOcc(arr,k)

// function findOcc(arr,k){
//     let n = arr.length
//     let f = -1
//     let l = -1
//     for(let i=0; i<n; i++){
//         if(arr[i] == k){
//             f=i
//             break;
//         }
//     }
//     for(let i=n-1; i>=0; i--){
//         if(arr[i] == k){
//             l=i
//             break;
//         }
//     }
//     console.log(f,l);

// }
//-------------------------------------------------------------- itration
// function findOcc(arr,k){
//     let n = arr.length
//     let f = -1
//     let l = -1
//     for(let i=0; i<n; i++){
//         if(arr[i] == k && f==-1){
//             f=i
//             l=i
//         }else if(arr[i] == k){
//             l=i
//         }
//     }
//     console.log(f,l);

// }

//------------------------------------------------- binary search

// function findOcc(arr,k){
//     let n = arr.length
//     let firstOcc = -1
//     let lastOcc = -1
//     let s=0
//     let e=n-1
//     let mid;

//     while(s<=e){
//         mid = Math.floor((s+e)/2)
//         // console.log(s,e,mid)

//         if(arr[mid] == k){
//             firstOcc=mid
//             e=mid-1
//         }else
//         if(arr[mid]>k){
//             e=mid-1
//         }else{
//             s=mid+1
//         }
//     }
//     s=0
//     e=n-1
//     while(s<=e){
//         mid = Math.floor((s+e)/2)
//         console.log(s,e,mid)

//         if(arr[mid] == k){
//             lastOcc=mid
//             s=mid+1
//         }else
//         if(arr[mid]>k){
//             e=mid-1
//         }else{
//             s=mid+1
//         }
//     }

//     console.log(firstOcc, lastOcc);
// }

//================================================

// best time buy ans sell stock

// let arr = [7,1,5,3,6,4]
// var maxProfit = function(prices) {
//     let buy=prices[0],maxProfit=0
//     for(let i=1;i<prices.length;i++){
//         if(buy<prices[i]){
//             let max=prices[i]-buy
//             if(maxProfit<max)
//                 maxProfit=max
//         }else{
//             buy=prices[i]
//         }
//     }
//     return maxProfit
//    }

//===============================================

let arr1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let arr2 = [2, 5, 6];
let n = 3;


const merge = function(nums1, m, nums2, n) {
    let i = m-1
    let j = n-1
    let k = m+n-1

    while(i>=0 || j>=0){
        console.log(i,j,nums1)
        if(nums1[i]>nums2[j]){
            nums1[k] = nums1[i]
            k--
            i--
        }else{
            nums1[k] = nums2[j]
            k--
            j--
        }
    }
    // while(i>=0){
    //     nums1[k] = nums1[i]
    //     k--
    //     i--
    // }
    // while(j>=0){
    //     nums1[k] = nums2[j]
    //     k--
    //     j--
    // }

    console.log(nums1);
    
};
merge(arr1,m,arr2,n)


// var merge = function (nums1, m, nums2, n) {
//   let i = m + n - 1;
//   while (i >= 0) {
//     if (n == 0) {
//       return nums1;
//     }
//     if (nums1[m - 1] <= nums2[n - 1]) {
//       nums1[i] = nums2[n - 1];
//       n--;
//     } else if (nums1[m - 1] > nums2[n - 1]) {
//       nums1[i] = nums1[m - 1];
//       m--;
//     } else if (m == 0 && n != 0) {
//       nums1[i] = nums2[n - 1];
//       n--;
//     }
//     i--;
//   }
//   return nums1;
// };

// let nums1 = [100, 101, 102];
// let nums2 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let len = nums1.length + nums2.length;
// let arr3 = [];
// let k = 0;
// let j = 0;
// for (let i = 0; i < len; i++) {
//   console.log(j, k);
//   if (nums1[k] != undefined) {
//     if (nums1[k] < nums2[j]) {
//       arr3.push(nums1[k]);
//       k++;
//     }
//   } else {
//     arr3.push(nums2[j]);
//     j++;
//   }
//   if (nums2[j] != undefined) {
//     if (nums2[j] < nums1[k]) {
//       arr3.push(nums2[j]);
//       j++;
//     }
//   } else {
//     arr3.push(nums1[k]);
//     k++;
//   }
// }
// console.log(arr3);
