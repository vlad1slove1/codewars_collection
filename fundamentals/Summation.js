/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

/*
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.
*/

const summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
};

/*
solve with cycle for()
1) sum start from 0;
2) adding every i to sum;
3) return summation;
*/
