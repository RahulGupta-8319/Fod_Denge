// 18 . write a function to check element in integer or not
// let n = 12.12 // => false
//let m = "abc" // => false
 //let n = "12a"  //=> false
let n = "012349" // => true
console.log(checkInteger(n));
function checkInteger(n){
    
for(let i = 0 ; i<n.length;i++){
   if(!(n[i]>0 || n[i]<9)){
      return false
   } 
}
return true
}








