// /* Write a function fizzbuzzfoobar that takes a kber n as input and:
// displays "fizz" when it is div by 2
// displays "buzz" when it is div by 3
// displays "foo" when it is div by 5
// displays "bar" when it is not div by any
// */

// function fizzbuzzfoobar(n){
//     let str = ''
//     if(n%2 == 0){
//         str += 'fizz'
//     }
//      if(n%3 == 0){
//         str += "buzz"
//     }
//      if(n%5 == 0){
//         str += 'foo'
//     }

//     if(str.length ==0){
//         return 'bar'
//     }else{
//         return str
//     }

// }
// console.log( fizzbuzzfoobar());

/* Write a function closest which takes a number n and an array as input and returns the index of the number in the array closest to n
If there are 2 matches, return the index of the larger number
Eg: 4.5, [4, 5, 1, 3, 9]
=> 1
Eg: 4.5, [1, 7, 0, 3, 2]
=> 3

*/
let arr =[4, 5, 1, 3, 9]
let k = 4.5;

function findClosest (arr, k) {
    let closest = arr[0]
    let diff = Math.abs (k - closest)
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        let newdiff = Math.abs (k - arr[i])
        if (newdiff <= diff) {
            diff = newdiff
            closest = arr[i]
            index = i
        }
    }
    console.log(index);
    return index;
}

findClosest(arr, k)
