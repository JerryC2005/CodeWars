/* 
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:

The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0
*/

// declare function that has 2 arguements
// the exponent can never be 1 or 0 if there is return false
// next the function should multiply both arguements
// then subtract 1 from the exponent arguement
// finally it should return a string that looks like this "56x^7"

function derive(coefficient,exponent) {
    if (exponent === 1 || exponent === 0) {
      console.log('please enter a number besides 1 or 0');
      return false;
    } else {
      let total = coefficient * exponent;
      --exponent;
      
      return `${total}x^${exponent}`;
    }
}
  
console.log(derive(7,8));

//this problem was pretty simple no issues just a good starter problem


