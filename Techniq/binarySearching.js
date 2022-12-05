 //=============================== Binary Searching

/* - always work in sorted array
   - 
*/

//  let arr = [ 1,2,4,7,9,12]
// let target = 12

// function findTarget(arr,target){

//     let s = 0
//     let e = arr.length-1
//     let mid
//     while(s<=e){
        
//         mid = Math.floor((s+e)/2)
//         // console.log(arr[mid]);
//         if(arr[mid] == target) return mid
//         if(arr[mid] > target){
//             e=mid-1
//         }else{
//             s=mid+1
//         }
//     }
//     return -1

// }
// console.log( findTarget(arr,target) );

//=======================================================
// Q.>> given a sorted array which migh contain some repeating elements, //target .
//      find out starting and ending index of the target.

//  let arr = [1,4,5,6,7,7,7,7,7,7,8,9,9];
//  let target = 7               // 4 9

// const findIndex = function(arr, target){
//     let a , b
//     let s = 0                  //0  0
//     let e = arr.length-1       //13 6
//     let mid                    //6  3
//     while(s<e){
//         mid = Math.floor((s+e)/2)

//         if(arr[mid] == target){
//             e = mid
//             a=mid
//             // console.log(a);
//         }
//         else if(arr[mid]>target){
//             e=mid-1
//         }else{
//             s=mid+1
            
//         }
//     }
 
//      s = 0                  //0  0
//      e = arr.length-1       //13 6
//      mid  = null                  
//     while(s<e){
//         mid = Math.floor((s+e)/2)

//         if(arr[mid] == target){
//             s = mid
//             b=mid
//             // console.log(a);
//         }
//         else if(arr[mid]>target){
//             e=mid-1
//         }else{
//             s=mid+1
            
//         }
//     }
//     return [a,b]
        
// }

// console.log(findIndex(arr, target));
 


