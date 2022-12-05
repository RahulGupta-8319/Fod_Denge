// let arr = [ 2,3,2,12,,,,2,2,2,2,3,,3,4,5,4,]
// //--------------------------------- brute  force ----------------------------------------------->>>>>>>>>>>
//     // let visited = Array.from({length: arr.length}, (k, i) => "false"); // [un.. , un.. , Tun..]
//     let visited = Array(arr.length)

// for (let i = 0; i < arr.length; i++) {
    
//    if (visited[i] == true )  continue

//     let count = 1
//     for (let j = i+1; j < arr.length; j++) {
//        if(arr[i] == arr[j]){
//        visited[j] = true
//         count++
//        }
        
//     }

//     console.log(arr[i], count, "visited" + visited)
// }
// console.log( "visited--" + visited)

// var arr1 = Array.from({
//     length: 5 // Create 5 indexes with undefined values
//   },
//   function(v, k) { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to 4]
//     return v; // Return k(ey) as value for this index
//   }
// );

// let arr2 = Array(3)

// let visited = Array.from({length: 5}, (k, i) => "false");

//-------------------------------------------- frequency counter---------------------------------------->>>>>>>>>>

// let arr = [ 2,3,2,12,,,,2,2,2,2,3,,3,4,5,4,]

// let fc = {}

// for(let val of arr){

//     if(fc[val]){
//         fc[val]++
       
//     }else
//     fc[val] = 1

// }

// console.log(fc)

//------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>

let arr1= [1,2,3]
let arr2= [4,1,9]

let fc1 = {}
let fc2 = {}

for(let val of arr1){
     if(fc1[val]){
        fc1[val]++
     }else{
        fc1[val] = 1
     }
}

for(let val of arr2){
    if(fc2[val]){
       fc2[val]++
    }else{
       fc2[val] = 1
    }
}
let newobj
for(let i in fc1){

   if(i**2 )

console.log(fc1[i], i );
}
console.log(fc1, fc2);
