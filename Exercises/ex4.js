/*.
Write a recursive function named oddSum that takes a positive odd integer n and 
returns the sum of odd integers from 1 to n. Start with a base case, 
and use temporary variables to debug your solution. 
You might find it helpful to print the value of n each time oddSum is invoked.
*/



function oddSum(n) {
    if (n > 0) {
        if (n % 2 === 0) {
            return oddSum(n - 1);
        }
        else {
            return n + oddSum(n - 1);
        }
    }
    else {
        return n;
    }
}

console.log(oddSum(5));
