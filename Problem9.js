//Return the count of each characters from a string.

function countChars(str) {
  const charMap = {}; // Create an empty object to store character counts

  // Iterate through the string
  for (let char of str) {
    // Convert character to lowercase for case-insensitive counting (optional)
    char = char.toLowerCase();

    // Check if character exists in the map
    if (charMap[char]) {
      charMap[char]++; // Increment count for existing character
    } else {
      charMap[char] = 1; // Add new character with count 1 // like {t : 1}
    }
  }

  return charMap; // Return the character map with counts
}

const inputString = "This is a string with repeated characters!";
const charCounts = countChars(inputString);
console.log(charCounts);
