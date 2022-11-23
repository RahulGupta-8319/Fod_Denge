//slidding window = consicutive number 

// let arr=[1,3,5,8,9,11,7,10,0,50]

// let k = 3

// let maxSum = function(arr,k){
//     let l = arr.length
//     let maxSum = -Infinity
//     for(let i=0; i<l; i++){
//         let currSum = 0
//         for(let j=i; j<i+k; j++){
//             currSum = currSum+arr[j]
//         }
//         if(maxSum<currSum){
//             maxSum = currSum
//         }
//     }
//     return maxSum
// }

// console.log(maxSum(arr,k));

//---------------------------- optimizartion -----------------------------------
//- max sum of contigious no.
// let arr=[1,3,5,8,90,9,11,7,10,0,50]

// let k = 3

// let maxSum = function(arr,k){
 
//     let maxSum = -Infinity
//     let currSum = 0
//     for (let i = 0; i < k; i++) {
//          currSum+=arr[i]
//     }
//     for(let i=k; i<arr.length; i++){
//         currSum = currSum+arr[i]-arr[i-k]
//         if(currSum>maxSum){
//             maxSum = currSum   // maxSum = Math.max(maxSum,currSum)
//         }
//     }

//     return maxSum
// }

// console.log(maxSum(arr,k));

//******************************************************************************** */

//leetcode - 1456 / 219 / 3

// -1456 find max vowel in given sub string
// let s = "ibcktewyqefvkyherfeiajqfrr" 
// let k =3

// let isVovel = function(ch){
//     if(ch == "a" ||ch == "e" ||ch == "i" ||ch == "o" ||ch == "u" ){
//         return true
//     }
//     return false;
// }
// let maxVowel = function(s,k){

//     let maxVovel = 0
//     let currVovel = 0

//     for(let i=0; i<k; i++){
//         if(isVovel(s[i])){
//                 currVovel++
//         }
//     }
//     maxVovel = currVovel
//     for(let i=k; i<s.length; i++){
//         if(isVovel(s[i])){
//             currVovel++
//         }
//         if(isVovel(s[i-k])){
//             currVovel--
//         }

//         maxVovel = Math.max(maxVovel,currVovel)
        
//     }
//     return maxVovel
// }

// console.log(maxVowel(s,k));

//***************************************************************************** */
// - leetcode = 219

// let  nums = [1,2,38,5,1]

// let map = {}
// let k = 3

// for(let i=0; i<nums.length; i++){
//     if(map[nums[i]]!=undefined  && Math.abs( i - map[nums[i]] ) <=k ){
//         console.log("yes");                
//     }else{
//         map[nums[i]] = i
//     }
// }

// console.log(map);
// console.log(map);

//----------------------------------------------------------------------
//leetcode -03

// brute force============== o(n^3)

//  function areDistinct(str,i, j)
//  {   // Note : Default values in visited are false
//      var visited = new Array(26)
 
//      for(var k = i; k <= j; k++)
//      {
//          if (visited[str.charCodeAt(k) - 97] == true)
//              return false;
              
//          visited[str.charCodeAt(k) - 97] = true;
//          //  console.log(visited[str.charCodeAt(k) - 'a'] , str.charCodeAt(k) )
//      }
//      return true;
//  }
//  var lengthOfLongestSubstring = function(str) {
//   var n = str.length
      
//      // Result
//      var res = 0;
      
//      for(var i = 0; i < n; i++){
//          for(var j = i; j < n; j++){
//              if (areDistinct(str, i, j)){
             
//                  res = Math.max(res, j - i + 1);
//              }
//          }
//      }
                  
//      return res;
//  };

//================================================= o(n^2)
// let str = "abcdeabcgfetcqwedtguhyjkibb"
// var lengthOfLongestSubstring = function(str) {
//  var n = str.length

//     var max = 0; 
//     for(var i = 0; i < n; i++){
//         let obj = {}
//         let charInObj =0 
//         for (let j = i; j < n; j++) {
//             if(obj[str[j]] ){
//                 break;
//             }
//             obj[str[j]]  = 1
//             charInObj++
            
//         }
//         if(max<charInObj){
//             max = charInObj
//         }
//     }
        
           
                 
//     return max;
// };

// console.log(lengthOfLongestSubstring(str));

//==================================================== slidding window - o(n)


// let str = "abcdeabcgfe"

// function check(arr,k){
//     let start=0;
//     let end= arr.length-1;
//      //console.log(end)
       
//     let mid= Math.floor(start+end)/2
//        // console.log(arr[mid])
//        while(start<=end){ 
//         console.log(start,end,mid);
//          if(k==arr[mid]){
//          return mid
//          }
//           if(k>arr[mid]){
//              start=mid+1
//         }
//          else{
//              end=mid-1
//          }
//          mid=Math.floor((start+end)/2)
//         // console.log(mid)
//      }
//         return -1
//     }
//     let arr=[1,2,3,4,5,7,8,12,312]
//     let k = 312
//     // console.log(Math.floor((8+5)/2), "ok");
//     console.log(check(arr,k));
// ------------------------------------------------------------ variable size window (sliding window)


