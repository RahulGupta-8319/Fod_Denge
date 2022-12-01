//GFG => Reverse each word in a given string

// Input:
let s = "i.like.this.program.very.much"
// Output: 
// i.ekil.siht.margorp.yrev.hcum

// let str = "abcdef"
// console.log(reverseString(str));
function reverseString(str){
    //base 
    if(str<=0) return ""

    //recursive
    return reverseString(str.slice(1)) + str[0]
}
reverseSantance(s)
function reverseSantance(s){
    let str = s.split(".")
    console.log(str);
    let res = ""
    for(let i in str){
        // console.log();
      res = res + reverseString(str[i]) + '.'
    }
    console.log(typeof res.slice(0,-1));
}

//=============================== remove duplicate
//LC => 
