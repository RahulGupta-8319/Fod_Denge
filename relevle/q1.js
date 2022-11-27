// Less than V
// Question Name: Less than V

// Problem Statement

// Today is Christmas eve and Antonio is making a cake to celebrate it.

// Antonio has bought N butterscotch flavorings to flavor the cakes. ith of these flavorings has sweetness Si. Antonio can mix any two of these flavorings(say the ith and the jth flavoring) and achieve a total sweetness of Si*Sj.

// Antonio considers the cake to be too sweet if its sweetness is more than V.

// Given array S, and an integer V, print the number of ways in which Antonio can select two vanilla flavorings such that their total sweetness is less than or equal to V.

// Input Format

// First line contains two space separated integers denoting N and V.
// Next line contains N space separated integers denoting array S.
// Output Format

// Print the number of ways in which Antonio can select two vanilla flavorings so that their total sweetness is less than or equal to V.
// Constraints

// 1<=N<=105
// 1<=V<=1012
// 1<=Si<=106
// Sample Input 1

// 5 9

// 4 2 5 1 2

// Sample Output 1

// 7

// Explanation of Sample 1

// Possible ways to select the flavoring are :

// (1,2), (1,4), (1,5), (2,4), (2,5), (3,4), (4,5)

// Select the 1st and 2nd flavoring.
// Select the 1st and 4th flavoring.
// Select the 1st and 5th flavoring.
// Select the 2nd and 4th flavoring.
// Select the 2nd and 5th flavoring.
// Select the 3rd and 4th flavoring.
// Select the 4th and 5th flavoring.


// Things to Note for the Candidate:

// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.


// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.


// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.


// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)


// Function candidate has to implement


//Driver Code

// var temp1 = readline().trim();
// var temp2 = temp1.split(" ");
// var n=Number(temp2[0]);
// var v=Number(temp2[1]);
// var temp = readline().trim();
// var s = temp.split(" ");
// for(i=0;i<n;i++)
// {
//     s[i]=Number(s[i]);
// }
let n = 5
let v = 9
let s = [4,2,5,1,2]
var num  = lessThanV(s,n,v);
console.log(num);

function lessThanV(s,n,v)
{
    s.sort( (a,b) => a-b )
    console.log(s);
  let arr = []
  let count = 0
  for (let i = 0; i < n; i++) {

    for(let j=i+1; j<n; j++){

        if(s[i] ==  s[j]) continue
        arr.push([s[i],s[j]])
        if(s[i]+s[j] <= v){
            count++
        }
    }

  }
  console.log(arr,count);
}