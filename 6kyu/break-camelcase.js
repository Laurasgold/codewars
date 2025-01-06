// INSTRUCTIONS 
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// MY SOLUTION 
// none wasnt sure how to find the capital letter in the string to add a space before it

function solution(string) {
  upperLetter = string.split(' ').isupper
  if ()
  return "";
}

// OTHER SOLUTION 

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}


function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

