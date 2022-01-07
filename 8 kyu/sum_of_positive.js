// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

const example = [1, -4, 7, 12];

const solution = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(solution(example));

/*
1) create variable sum;
2) setup loop to walk through the array with cycle for();
3) check item of array (if item is greater than 0, add this item to sum);
4) return finas summation;
*/
