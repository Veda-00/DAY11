function sortStringAlphabetically(str) {
  // Convert the string to an array of characters
  const charArray = str.split('');

  // Sort the array alphabetically
  charArray.sort();

  // Join the array back into a string
  const sortedStr = charArray.join('');

  return sortedStr;
}

// Example:
const exampleString = 'webmaster';
const output = sortStringAlphabetically(exampleString);
console.log(`Example string : '${exampleString}'`);
console.log(`Expected Output : 'abeemrstw'`);
console.log(`Actual Output : '${output}'`); // Output: 'abeemrstw'

// Another example
const anotherString = 'hello';
const output2 = sortStringAlphabetically(anotherString);
console.log(`Example string : '${anotherString}'`);
console.log(`Expected Output : 'ehllo'`);
console.log(`Actual Output : '${output2}'`); // Output: 'ehllo'

// Example with mixed case (note: .sort() is case-sensitive by default)
const mixedCaseString = 'Programming';
const output3 = sortStringAlphabetically(mixedCaseString);
console.log(`Example string : '${mixedCaseString}'`);
console.log(`Expected Output : 'Ggimmnoprr' (case-sensitive)`);
console.log(`Actual Output : '${output3}'`); 
// If you want case-insensitive sorting, you'd convert to lower case before sorting
// and then potentially reconstruct the original casing or just return lowercase.
function sortStringAlphabeticallyCaseInsensitive(str) {
    const lowerCaseArray = str.toLowerCase().split('');
    lowerCaseArray.sort();
    return lowerCaseArray.join('');
}
const output4 = sortStringAlphabeticallyCaseInsensitive(mixedCaseString);
console.log(`Example string : '${mixedCaseString}' (case-insensitive)`);
console.log(`Expected Output : 'aggimmnoprr'`);
console.log(`Actual Output : '${output4}'`);