/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if(nums.length === 0) return 1

  //regular case
  return nums[0] * product(nums.splice(1))
}

function productAccumulator(nums, i=0) {
  //base case
  if(nums.length === i) return 1;

  return nums[i] * productAccumulator(nums, i + 1)
  
}



/** longest: return the length of the longest word in an array of words. */

function longest(words, longestWord="", i=0) {
//base case

  if(words.length === i) return longestWord.length;

  if(words[i].length > longestWord.length) longestWord = words[i]
  return longest(words, longestWord, i + 1)

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, out="") {
    if(str.length === i) return out;

    if(i % 2 === 0) out += str[i]
    return everyOther(str, i + 1, out)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start=0, end=str.length-1) {
  
  if(str[start]===" ") start++;
  if(str[end]===" ") end--;
  if(str[start] !== str[end]) return false;

  while(start<end){
    start++;
    end--;
    return isPalindrome(str, start, end)
  }

  return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (arr[i] === val) return i;
  if(i >= arr.length) return -1;

  return findIndex(arr, val, i + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, reversed = "") {
  if(str.length === i) return reversed

  reversed = str[i] + reversed
  return revString(str, i + 1, reversed)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings = []) {
  for (let el of Object.keys(obj)) {
    if (typeof obj[el] === 'object' && obj[el] !== null) {
      gatherStrings(obj[el], strings);
    } else if (typeof obj[el] === 'string') {
      strings.push(obj[el]);
    }
  }
  return strings
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i=0) {
  if (arr[i] === val) return i;
  if(i >= arr.length) return -1;

  return binarySearch(arr, val, i + 1);

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
