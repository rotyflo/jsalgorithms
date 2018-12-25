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

  for (let i = 2; i <= num; i++) factorial *= i

  return factorial
}

// console.log(factorialize(5))

function findLongestWordLength(str) {
  let words = str.split(' ')
  let longest = 0

  words.forEach(word => {
    if (word.length > longest) longest = word.length
  })

  return longest
}

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// )

function largestOfFour(arr) {
  let largestNumbers = []

  arr.forEach(subArr => {
    let largest = subArr[0]

    subArr.forEach(num => {
      if (num > largest) largest = num
    })

    largestNumbers.push(largest)
  })

  return largestNumbers
}

// console.log(largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]))

function confirmEnding(str, target) {
  let lastChars = str.slice(-target.length)

  if (lastChars === target) return true

  return false
}

// console.log(confirmEnding("Bastian", "n"))