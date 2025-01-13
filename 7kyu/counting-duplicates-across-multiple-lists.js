// INSTRUCTIONS:
// Given multiple lists (name, age, height), each of size n :

// An entry contains one name, one age and one height. The attributes corresponding to each entry are determined by the index of each list. For example, the first entry is comprised of the first elements of each list, the second entry is comprised of the second elements of each list, etc.

// A duplicate entry is one in which the name, age and height are ALL the same.

// Write a function which takes in the attributes for each entry and returns an integer for the number of duplicated entries. For a set of duplicates, the original entry should not be counted as a duplicate.

// MY SOLUTION: (WRONG)

function countDuplicates(name, age, height) {
  let nameMatch = name.filter((item, index) => name.indexOf(item) !== index);
   console.log(nameMatch)
    let ageMatch = age.filter((item, index) => age.indexOf(item) !== index);
   console.log(ageMatch)
      let heightMatch = height.filter((item, index) => height.indexOf(item) !== index);
   console.log(heightMatch)
   if (){}
 }
// OTHER SOLUTION:
function countDuplicates(name, age, height) {
  return name.length - new Set(name.map((n,i) => `${n}|${age[i]}|${height[i]}`)).size
}

function countDuplicates(name, age, height) {
  const uniqueEntries = new Set(
    name.map((n, i) => `${n},${age[i]},${height[i]}`)
  );
  return name.length - uniqueEntries.size;
}

