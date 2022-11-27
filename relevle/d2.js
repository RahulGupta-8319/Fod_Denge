// Operations on Subsequences
// OPERATIONS ON SUBSEQUENCES

// Problem Statement

// Amy has an array A, of N integers. She wants to modify A such that for each i (1<=i<N), Ai+1 – Ai >=0.

// In one operation she can select a subsequence S of length K (1<=K<=N) of the array and change each Sj (1<=j<=K) to (Sj + 1) %M.

// Find the minimum number of operations required to make array A, as she wants.

// You are given T independent test cases.

// NOTE: A sequence S is a subsequence of an array A if S can be obtained from A by deletion of several (possibly, zero) elements. For example, S = [1, 2, 9] is the subsequence of the array A = [0, 1, 1, 4, 2, 9].

// Constraints

// 1 <= T <= 10
// 1 <= N, M <= 105
// 0 <= Ai < M
// All input values are integers.
// Input Format

// First-line contains T.
// First line of each test case contains two space separated integers N and M.
// Second line contains N space separated integers denoting the array A.
// Output Format

// Print in a newline for each test case a single integer denoting the minimum number of operations required to make array A, as she wants.
// Sample Input 1

// 1

// 3 2

// 1 0 0

// Sample Output 1

// 1

// Explanation of Sample 1

// She can select the subsequence S = {A1} = {1} and then change it to S = { (1+1)%2 } = {0}.

// Now the array becomes A = [ 0, 0, 0].



// Things to Note for the Candidate:

// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.


// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.


// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.


// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)
