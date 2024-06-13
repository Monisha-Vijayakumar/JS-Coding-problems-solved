// Gaming problem.
// Return the index of the heaviest package from the container. If the container is empty, return 0.

function myFunction(arr) {
  if (arr.length == 0) {
    return 0;
  }
  const sortedArr = arr.sort((a, b) => a - b); //Sort the array in Asc order
  const heaviest = sortedArr.reduce((prev, curr) =>
    prev > curr ? prev : curr
  ); //compare and get bigger value
  return sortedArr.indexOf(heaviest);
}

console.log(myFunction([80, 100, 67, 130, 16, 56, 32]));
