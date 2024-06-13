//Reverse words in a string

function reverseString(str) {
  const splittedArr = str.split(" ");
  let resultArr = [];
  for (let i = splittedArr.length; i > 0; i--) {
    resultArr.push(splittedArr[i]);
  }
  return resultArr.join(" ").trimStart().trimEnd();
}

console.log(reverseString("hello world"));
