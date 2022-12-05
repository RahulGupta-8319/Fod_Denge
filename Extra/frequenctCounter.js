
// # brute force approach 
//           -TC = o(n^2)
//           - SC = o(n)

// let arr = [ 2,3,2,12,2,2,2,2,3,3,4,5,4,]

// let visited = new Array(arr.length)

// for (let i = 0; i < arr.length; i++) {
//     let count = 1
//     if (visited[i]) continue
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i] == arr[j]){
//         count++
//         visited[j] = 1
//         }
//     }
//     console.log(arr[i] , count);

// }
// ----------------------------- optimization -------------------------------------------

// just create hash or map table
//  - count the frequnecy
// let arr = [ 2,3,2,12,2,2,2,2,3,3,4,5,4,]

// let map = {}

// for (let i = 0; i < arr.length; i++) {
//     if(map[arr[i]]){
//         map[arr[i]]++
//     }else{
//         map[arr[i]] = 1
//     }
// }
// console.log(map);

//-------------------------------- example -------------------------------------------
//1. check square in the array [1 2 3 ] = [1 4 9]  


// let arr = [1, 2, 3, 3]
// let square = [1, 4, 9,]
// if (arr.length != square.length) console.log("no");

// let arrMap = {}
// let squareMap = {}

// for (let i in arr) {
//     if (arrMap[arr[i]]) {
//         arrMap[arr[i]]++
//     } else {
//         arrMap[arr[i]] = 1
//     }
// }
// for (let i in square) {
//     squareMap[square[i]] = (squareMap[square[i]]|| 0) + 1
// }
// for (let key in arrMap) {
//     if (!(key * key in squareMap)) console.log("no");
//     if (arrMap[key] != squareMap[key * key]) console.log("no");

// }
// console.log(arrMap, squareMap);

//************************************************************************** */
//@. given string is anagram or not race=care, knee=neek

let str1= "race26"
let str2= "r2ace6"

const checkAnagram = function(str1,str2){
    if(str1.length != str2.length) return false
    let str1Map = {}
    let str2Map = {}

    for(let i in str1){
        if(str1Map[str1[i]]){
            str1Map[str1[i]]++
        }else{
            str1Map[str1[i]] = 1
        }
    }
    for(let i in str2){
        if(str2Map[str2[i]]){
            str2Map[str2[i]]++
        }else{
            str2Map[str2[i]] = 1
        }
    }

    for(let key in str1Map){
         if (!(key in str2Map)) return false
         if(str1Map[key] != str2Map[key]) return false
    }
    console.log(str1Map,str2Map);
    return "aya aya kuch to aaya"
}

console.log( checkAnagram(str1,str2) )

