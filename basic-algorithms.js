function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32

  return fahrenheit
}

// console.log(convertToF(30))

function reverseString(str) {
  let reversed = str.split('').reverse().join('')

  return reversed
}

// console.log(reverseString("hello"))

function factorialize(num) {
  let factorial = 1

  for (let i = 2 i <= num i++) {
    factorial *= i
  }

  return factorial
}

// console.log(factorialize(5))

function findLongestWordLength(str) {
  let words = str.split(' ')
  let longest = 0;

  words.forEach(word => {
    if (word.length > longest) longest = word.length
  })

  return longest
}

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// )