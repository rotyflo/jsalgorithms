const algorithms = require('./src/algorithms.js')
const rl = require('readline-sync')
const getArgs = require('get-parameter-names')

let algoNames = Object.keys(algorithms)

console.log('\nLIST OF FUNCTIONS')

for (let i = 0; i < algoNames.length; i++) {
  console.log(`  ${i}. ${algoNames[i]}`)
}

let index = rl.question('\nPick a number: ')
let funcName = algoNames[index]
let func = algorithms[funcName]

console.log('\n' + funcName)

let args = getArgs(func)
let inputs = []

for (let i = 0; i < args.length; i++) {
  let arg = rl.question(args[i] + ': ')

  inputs.push(arg)
}

console.log('result: ' + func(
  inputs[0],
  inputs[1],
  inputs[2],
  inputs[3]))