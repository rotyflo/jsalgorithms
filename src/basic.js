module.exports = {
  convertToF: (celsius) => {
    let fahrenheit = celsius * 9 / 5 + 32

    return fahrenheit
  },


  reverseString: (str) => {
    let reversed = str.split('').reverse().join('')

    return reversed
  },


  factorialize: (num) => {
    let factorial = 1

    for (let i = 2; i <= num; i++) factorial *= i

    return factorial
  },


  findLongestWordLength: (str) => {
    let words = str.split(' ')
    let longest = 0

    words.forEach(word => {
      if (word.length > longest) longest = word.length
    })

    return longest
  },


  largestOfFour: (arr) => {
    // ENSURES COMPATIBILY WITH CLI
    arr = JSON.parse(arr)

    let largestNumbers = []

    arr.forEach(subArr => {
      let largest = subArr[0]

      subArr.forEach(num => {
        if (num > largest) largest = num
      })

      largestNumbers.push(largest)
    })

    return largestNumbers
  },


  confirmEnding: (str, target) => {
    let lastChars = str.slice(-target.length)

    return lastChars === target ? true : false
  },


  repeatStringNumTimes: (str, num) => {
    let repeatedString = ''

    while (num > 0) {
      repeatedString += str
      num--
    }

    return repeatedString
  },


  truncateString: (str, num) => {
    let shortString = str.slice(0, num) + '...'

    return num >= str.length ? str : shortString
  },


  findElement: (arr, func) => {
    arr = JSON.parse(arr)
    func = JSON.parse(func)

    for (let num of arr) if (func(num)) return num
  },


  booWho: (bool) => {
    return typeof bool === 'boolean' ? true : false
  },


  titleCase: (str) => {
    let words = str.split(' ')
    let titleWords = []

    words.forEach(word => {
      let titleWord = word[0].toUpperCase() + word.slice(1).toLowerCase()

      titleWords.push(titleWord)
    })

    let titleStr = titleWords.join(' ')

    return titleStr
  },


  frankenSplice: (arr1, arr2, n) => {
    let spliced = arr2.slice()

    arr1.forEach(item => {
      spliced.splice(n++, 0, item)
    })

    return spliced
  },


  bouncer: (arr) => {
    let filteredArr = arr.filter(item => item)

    return filteredArr
  },


  getIndexToIns: (arr, num) => {
    arr.sort((a, b) => a - b)

    for (let item of arr) if (num <= item) return arr.indexOf(item)

    return arr.length
  },


  mutation: (arr) => {
    let str = arr[0].toLowerCase()
    let requiredLetters = arr[1].toLowerCase().split('')

    for (let letter of requiredLetters) {
      if (str.indexOf(letter) === - 1) return false
    }

    return true
  },


  chunkArrayInGroups: (arr, size) => {
    let arrCopy = arr.slice()
    let subArrays = []

    while (arrCopy.length > 0) {
      subArrays.push(arrCopy.splice(0, size))
    }

    return subArrays
  }
}