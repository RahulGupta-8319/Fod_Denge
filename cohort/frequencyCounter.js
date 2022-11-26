//======================== frequency counter 

// we have to create a object or map and doing insertion in it 

// let arr = [1,1,2,3,5,4,1,2,3,5,1]

// function frequencyCounter(arr){
//     let map = {}
     
//     for(let val of arr){
       
//         if(map[val]){
//             map[val]++
//         }else{
//             map[val] = 1
//         }
//     }
//     console.log(map)

// }

// frequencyCounter(arr)

//===============================================

/* check the square presentr in array 
[1,2,3] => [1,4,9]
[2,2,3] => [4,4,9] */
// let arr1=[1,2,3,4,8] 
// let arr2= [1,4,9,16,64]

// function checkSquare(arr1,arr2){
//     let map1={}
//     let map2={}

//     for(let val of arr1){
//         if(map1[val]){
//             map1[val]++
//         }else{
//             map1[val] =1
//         }
//     }
//     for(let val of arr2){
//         if(map2[val]){
//             map2[val]++
//         }else{
//             map2[val] =1
//         }
//     }

//     for(let key in map1){
//         if(key*key in map2){
//             if(map1[key] != map2[key*key]) return false
            
//         }else{
//             return false
//         }

//     }
//     return true

//     console.log(map1,map2);

// }
// console.log( checkSquare(arr1,arr2) )

//==========================================

// anagram 
// "cat" => "atc"
// "race" => "care" 
// let str1 = 'race'
// let str2 = 'care'

// function anagram(str1,str2){
//     if(str1.length != str2.length) return false

//     let map1={}
//     let map2={}

//     for(let val of str1){
//         map1[val] = (map1[val] || 0) +1
//     }
//     for(let val of str2){
//         map2[val] = (map2[val] || 0) +1
//     }
//     for(let key in map1){
//         if(!(key in map2)){
//             return false
//         }
//         if(map1[key] != map2[key]){
//             return false
//         }
//     }
//     return true
//     console.log(map1,map2);
// }
// console.log(anagram(str1,str2));
