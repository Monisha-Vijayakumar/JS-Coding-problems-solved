//Temperature problem.
// Return the temperature value close to zero. If the temperature is empty, return 0. If two equally temperature values are close to zero, return the positive one.
// Eg: -1, 1 return 1.

function myFunction(arr) {
  if (arr.length == 0) {
    return 0;
  }
  const target = 0;
  const sortedArr = arr.sort((a, b) => a - b); //Sort the array by Asc order.
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] > target) {
      //comparing with target
      const prev = sortedArr[i - 1];
      const curr = sortedArr[i];
      return Math.abs(prev - target) < Math.abs(curr - target) ? prev : curr; //evaluting the equal temp with - and + sign
    }
  }
}

console.log(myFunction([-5, 7, 9, 1, -2, -67, 23, 87, 12, -6, -1]));
