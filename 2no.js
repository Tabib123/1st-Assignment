const numbers = [12, 34, 45, 23, 6, 78, 54, 90];
function filterEvenNumbers(array) {
  const evenNumbers = [];
  for (const number of array) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}
const evenNumbers = filterEvenNumbers(numbers);
console.log("Original Array: ", numbers);
console.log("Filtered Even Numbers: ", evenNumbers);
