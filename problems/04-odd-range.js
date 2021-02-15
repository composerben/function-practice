/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
*******************************************************************************/

function oddRange(end) {
  let oddArray = [];
  for (let i = 1; i <= end; i++) {
    if (i % 2 !== 0) oddArray.push(i);
  }
  return oddArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = oddRange;
