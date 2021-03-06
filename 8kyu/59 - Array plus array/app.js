/* I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// Alternative :

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a, b) => a + b, 0);
}
