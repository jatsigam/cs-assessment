// 1)  Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true;
        }
      }
    }
    return false
  }
  console.log(addToZero([1, 2, 3, -3])) // Runtime is O(n^2)

/* 2) Write a function that takes in a single word, as a string. 
It should return True if that word contains only unique characters. Return False otherwise.
*/

function hasUniqueChars(str){
  let arr = str.split('')
  let uniqueArr = new Set(arr)
  if(str.length === uniqueArr.size){
    return true
  }
  return false
}
console.log(hasUniqueChars("Moonday")) // runtime is O(1)

/*
3) A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
Write a function to check a sentence to see if it is a pangram or not.
*/

function isPangram(str){
  let regex = /([a-z])(?!.*\1)/gi
 return (str.match(regex)).length === 26
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!")) // runtime is O(n^2)

// 4) Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr) {
  let longestWord = arr[0].length
  for (let i = 0; i < arr.length; i++) {
    if (longestWord < arr[i].length) {
      longestWord = arr[i].length
    }
  }
  return longestWord
}
console.log(findLongestWord(["hi", "hello", "umbrella"])) // runtime is O(n)