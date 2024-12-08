/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// declare variable with number as an arguement
// if number is < 0 return 0
// for loop to iterate to our chosen numbers
// if i % 3 === 0 or i % 5 === 0 push to our nums array
// if nums.length array is equal to 0 return 0
// else return nums using the reduce() method to add all num in array

// I felt like I over complicated this one looking at it now
// I could have just added them to a variable using (sum += i) 
const n = 23;

function solution(number){
  let nums = [];
  
  if (number < 0) {
    return 0
  }
  
  for(let i  = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i);
    }
  }
  if (nums.length === 0) {
    return 0
  }
  console.log(nums)
  return nums.reduce((a, b) => a + b);
}


console.log(solution(n));