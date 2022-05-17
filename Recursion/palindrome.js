// A simple way would be to check the first and last characters of the string and see if they are the same. If they are, we move in a letter on both sides and check if those letters are the same. We can keep doing that until we’ve gone through all of the letters or there is one letter left. If at any point the letters that we are comparing don’t match, we know that the word is not a palindrome.


function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  let [firstLetter] = string;
  let lastLetter = string[string.length - 1];

  if (firstLetter === lastLetter) {
    let stringWithoutFirstAndLastLetters = string.substring(
      1,
      string.length - 1
    );
    return isPalindrome(stringWithoutFirstAndLastLetters);
  } else {
    return false;
  }
}