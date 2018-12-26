const basic = require('./src/basic.js')
const rl = require('readline-sync')

let funcs = [
  'convertToF',
  'reverseString',
  'factorialize',
  'findLongestWordLength',
  'largestOfFour',
  'confirmEnding',
  'repeatStringNumTimes',
  'truncateString',
  'findElement',
  'booWho',
  'titleCase',
  'frankenSplice',
  'bouncer',
  'getIndexToIns',
  'mutation',
  'chunkArrayInGroups'
]

let descriptions = [
  'Converts input from celsius to fahrenheit.'
]

console.log('\nLIST OF FUNCTIONS')

for (let i = 0; i < funcs.length; i++) {
  console.log(`  ${i}. ${funcs[i]}`)
}



let index = rl.question('\nPick a number: ')

console.log('\n' + funcs[index] + ' - ' + descriptions[index])

let celsius = rl.question('\nCelsius: ')

console.log(basic.convertToF(celsius))