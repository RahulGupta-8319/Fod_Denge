// swap array withou third variable





//=================================
//reverse array

// let arr = [1,2,3,4,5]
// function reverse(arr){
//     let n = arr.length
//     let ans = []
//     for(let i=n-1; i>=0; i--){
//         ans.push(arr[i])
//     }
//     console.log(ans);
// }
// reverse(arr)
// function reverse(arr){
//     let i=0
//     let j=arr.length - 1
//     while(i<j){
//         arr[i] = arr[i]+arr[j]
//         arr[j] = arr[i]-arr[j]
//         arr[i] = arr[i]-arr[j]
//         i++
//         j--
//     }
//     console.log(arr);
// }

//==============================
//rotate an array

// ==>> brute force
// let arr = [1,2,3,4,5]
// rotateArrayBrute(arr, 2)

// function rotateArrayBrute(arr,k){
//     for (let i = 0; i < k; i++) {
//         let x = arr.pop()
//         arr.unshift(x)
        
//     }
//     console.log(arr);
// }

/*  ==>> optimized
1.rotate complete Array
2. reverse first k elememnt
3. reverse last n-k elememnt
*/

// let arr = [1,2,3,4,5]
// rotateArray(arr, 2)

// function rotateArray(arr,k){ 
//     // reverse complete array
//     let n = arr.length
//     reverse(arr, 0, n-1)

//     //revere 1st k elem
//     reverse(arr, 0, k-1) 

//     //reverse last k ele
//     reverse(arr, k, n-1)

//     console.log(arr);
// }



// function reverse(arr,i,j){

//     while(i<j){
//         arr[i] = arr[i]+arr[j]
//         arr[j] = arr[i]-arr[j]
//         arr[i] = arr[i]-arr[j]
//         i++
//         j--
//     }
//     return (arr);
// }

//=================================================

//largest pairsum in unsorted array
