// string method 

//-----------------------SLICE
// create a copy 

// let str = "abcdefghi"

// let x = str.slice( 2 )
// console.log(str , x);   //abcdefghi cdefghi

// let x = str.slice( 0 , 4)
// console.log(str , x);  //abcdefghi abcd

// let x = str.slice( -2 )
// console.log(str , x);   // abcdefghi hi

// let x = str.slice( 2, -2 )
// console.log(str , x);   //abcdefghi cdefg

// console.log(str.slice(-5, 2));  //""
// console.log(str.slice(-5, -2));     // efg
//------------------------------ substring 

// let str = "abcdefghi"

// let x = str.substring(2)
// console.log(str, x);    // abcdefghi cdefghi

// let x = str.substring( 0 , 4)
// console.log(str , x);  //abcdefghi abcd

// let x = str.substring(-3)
// console.log(str , x);   // abcdefghi abcdefghi

// let x = str.substring( 2, -2 )
// console.log(str , x);   //abcdefghi cdefg

// const text = 'Mozilla';
// console.log(text.substring(5, 2)); // "zil"  // substring switch start and end value if s>e
// console.log(text.slice(5, 2)); // ""

// console.log(text.substring(-5, 2)); // "Mo"  // substring take -ive no. as a "0"
// console.log(text.substring(-5, -2)); // ""

//----------------------------- replace

// let str = "abcdefghi"

// let x = str.replace("abc" , "tgh")
// console.log(str , x);  //abcdefghi tghdefghi


// let x = str.replace("" , "tgh")
// console.log(str , x);    //abcdefghi tghabcdefghi

//  let x = str.replace("zz" , "tgh")
//  console.log(str , x);   //abcdefghi abcdefghi

//---------------------------------- touppercase

// let str = "abcdefghi"
 
// let x = str.toUpperCase()

// console.log(str,x);  //abcdefghi ABCDEFGHI

//---------------------------------- tolowercase

// let str = "AVCDGBH123"
 
// let x = str.toLowerCase()

// console.log(str,x);  //AVCDGBH123 avcdgbh123

//------------------------- charAt

// let str = "AVCDGBH123"
 
// let x = str.charAt(2)

// console.log(str,x);   //AVCDGBH123 C // only 1 data return (2,3) => c

//---------------------- charCodeAt

// it take index value return asciii value like a = 97, A=65

// let str = "ABab"
 
// let x = str.charCodeAt(0)
// console.log(str,x); //ABab 65

//-------------------------------- split

// let str = 'abcd$efg'

// let x= str.split('')
// console.log(str,x);   //abcdefg ['a', 'b', 'c','d', 'e', 'f','g']

// let x= str.split('d')
// console.log(str,x);   //abcd$efg [ 'abc', '$efg' ]

//------------------------------- indexOf

// let str = 'abba'

// let x= str.indexOf("a")
// console.log(str,x);   // it return index value from start if not present return => -1   [0]

//--------------------------------- lastIndexOf

// let str = 'abba'

// let x= str.lastIndexOf("a")
// console.log(str,x);   // it return index value from end if not present return => -1   [3]

//--------------------------------- startwith

// let str = 'abba'

// let x= str.startsWith('b')  // check char start with input condition return true/false
// console.log(str,x); 

//-------------------------------- endWith

// let str = 'abbabc'

// let x= str.endsWith('c')  // check char end with input condition return true/false
// console.log(str,x);   // true

//---------------------------- include

// let str = 'abba 0bc'

// let x= str.includes('z')  // check char present or not  return true/false
// console.log(str,x);       // empty string => true

//--------------------------- concat


// let str = 'abba'

// let x= str.concat('123gh'+'fg') // concate multiple str  return true/false
// console.log(str,x);    //abba abba123ghfg   

//----------------------------- trim

let str = ' ab ba '

let x = str.trim()   //"ab ba" // trime start and end space
let y = str.trimStart() //"ab ba "     // trime start space 
let z = str.trimEnd()   //" ab ba"     // trim end space

console.log( z.length);













