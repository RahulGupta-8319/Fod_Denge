/* craete pattern in this manner
*
**
***
****
*****

*/

// for (let i = 1; i <= 5; i++) {
//     let raw = ''
//     for (let j = 1; j <= i; j++) {
//         raw += '*'
//     }
//     console.log(raw)
// }

//==============================================
/*2. invert triangle pattern

*****
****
***
**
*
*/

// for (let i = 5; i >= 1; i--) {
//   let raw = "";
//   for (let j = 1; j <= i; j++) {
//     raw += "*";
//   }
//   console.log(raw);
// }

// for (let i = 0; i <= 5; i++) {
//   let raw = "";
//   for (let j = 1; j < 5 - i+1; j++) {
//     raw += "*";
//   }
//   console.log(raw);
// }

//===============================================
// 3. diamond pattern
//   *
//  ***
// *****
//  ***
//   *

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }
  for (let j = 1; j <= 2*i-1; j++) {
    row += '*';
  }
  console.log(row);
}
for (let i = 4; i >= 1; i--) {
    let row = ''
    for(let j=1; j<= 5-i; j++){
        row += ' '
    }
    for (let j = 1; j <= 2*i-1 ; j++) {
        row += '*'   
    }
    console.log(row);
}

