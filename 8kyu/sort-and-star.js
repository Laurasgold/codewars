// DESCRIPTION

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// MY SOLUTION

function twoSort(s) {
  return s.sort().split("").join("***")
}

// didnt work im missing something with the sort method

// OTHER SOLUTIONS

function twoSort(s) {
  return s.sort()[0].split("").join("***")
}

twoSort = (s) => s.sort()[0].split("").join("***")
