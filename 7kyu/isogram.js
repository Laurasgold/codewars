// INSTRUCTIONS:

// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// MY SOLUTION:(failed)
function isIsogram(str) {
  let words = str.toLowerCase()
  let letters = words.split(" ")
  for (let i = 0; i < letters.length; i++) {
    //   if{}
    // }
  }
}

// OTHER SOLUTION:
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length
}
// Set object lets you store unique values of any type, whether primitive values or object references. A value in the set may only occur once; it is unique in the set's collection.

function isIsogram(str) {
  return !/(\w).*\1/i.test(str)
}
// ?????
