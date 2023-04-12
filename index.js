function isPalindrome(word) {
  // Write your algorithm here
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  if (word === joinArray) {
    return true;
  }
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
  first split the string into an array
  then reverse the string array
  then join the string array back together into a string
  use an if statement to see if it matches, return true if it does
  return false if it doesnt
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
