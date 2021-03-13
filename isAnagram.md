// Create a function called isAnagram, which given two strings, returns true if they are anagrams of one another.
// For example: `Listen` is an anagram of `Silent`

function isAnagram(first, second) {
  let isAnagram = true;
  //get each char into an array
  const arr1 = first.toLowerCase().split(""); 
  const arr2 = second.toLowerCase().split("");
  //if not the same size the words are not anagrams
  if(arr1.length !== arr2.length){
    isAnagram = false;
  } else {
    arr1.forEach((letter) => {
      if (!arr2.includes(letter)) { //check if the second array includes each character of the first array
        isAnagram = false;
      }
    });
  }

  return isAnagram;
}

// isAnagram(..., ...); should return true
