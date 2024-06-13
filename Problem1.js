//Finding a pair of numbers that add up to a target sum in a sorted or unsorted array.
// i/p : [3,5,2,8,11], target = 10, o/p: [2,8]

const inputArr = [3, 2, 11, 8, 5];
const target = 10;

function myFunction(arr) {
  for (let i = 0; i < arr.length; i++) {
    //looping through an array
    const diff = target - arr[i]; //finding the diff value
    const diffindex = arr.indexOf(diff); //finding the index of diff value
    if (arr.includes(diff) && diffindex !== i) {
      //validating against the 0th index
      return [arr[i], arr[diffindex]];
    }
  }
  return [];
}

console.log(myFunction(inputArr));
