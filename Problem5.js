//Contains duplicate. Return true, if array has any value twice, if distinct return false.

function duplicate(arr) {
  const distinct = [...new Set(arr)]; // to create distinct array
  if (distinct.length == arr.length) {
    //comparing length
    return false;
  }
  return true;
}

console.log(duplicate([1, 2, 3, 1]));
