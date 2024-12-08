/* 

Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck!


*/
// declare function that has 2 arguements birth year and year stated

// if birth year and year stated have the same value return a message

// if birth year is greater than year stated calculate by - ys to see in how many years you will be born

// if the calculation = 1 return a message

// else return a message

// if birth year is less than year stated calculate by - ys to see how old you will be in that year

// if years = 1 return a message

// else return a message

// overall no issues solving this problem and it was straight forward with instructions

function  calculateAge(by, ys) {  
    // enter your code here.
    if (by === ys) {
      return `You were born this very year!`
    }else if (by > ys) {
      years = by - ys;
      if(years === 1) {
        return `You will be born in ${years} year.`;
      }
      return `You will be born in ${years} years.`
    } else if (by < ys) {
      years = ys - by;
      if(years === 1) {
        return `You are ${years} year old.`
      } 
      return `You are ${years} years old.`
    }
  }
  
  console.log(calculateAge(2012, 2016));