function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;

  return fahrenheit;
}

// console.log(convertToF(30));

function reverseString(str) {
  let reversed = str.split('').reverse().join('');

  return reversed;
}

// console.log(reverseString("hello"));