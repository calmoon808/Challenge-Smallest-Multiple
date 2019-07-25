/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  let count = 2;
  let match = false;
  while(true){
    for (let i = 2; i <= ceiling; i++){
      match = true;
      if (count % i !== 0){
        i = ceiling;
        match = false;
      }
    }
    if (match){
      return count;
    }
    count++;
  }
};