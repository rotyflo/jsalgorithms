const algorithms = require('./src/algorithms.js')
const rl = require('readline-sync')
const getParams = require('get-parameter-names')

let algoNames = Object.keys(algorithms)

console.log('\nLIST OF FUNCTIONS')

for (let i in algoNames) {
  console.log(`  ${i}. ${algoNames[i]}`)
}

let index = rl.question('\nPick a number: ')
let funcName = algoNames[index]
let func = algorithms[funcName]

console.log('\n' + funcName)

let params = getParams(func)
let args = []

for (let param of params) {
  let arg = rl.question(param + ': ')

  args.push(arg)
}

console.log('result: ' + func(args[0], args[1], args[2], args[3]))