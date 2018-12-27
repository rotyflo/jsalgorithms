const algorithms = require('./src/algorithms.js')
const rl = require('readline-sync')
const getParams = require('get-parameter-names')

let algoNames = Object.keys(algorithms)

while (true) {
  console.clear()

  console.log("LIST OF FUNCTIONS\n(enter 'q' to quit)\n")

  for (let i in algoNames) {
    console.log(`\t${i}. ${algoNames[i]}`)
  }

  let index = rl.question('\nPick a number: ')

  if (index === 'q') {
    console.clear()
    break
  }

  let funcName = algoNames[index]
  let func = algorithms[funcName]

  console.clear()
  
  while (true) {
    console.log('\n' + funcName)

    let params = getParams(func)
    let args = []

    for (let param of params) {
      let arg = rl.question(param + ': ')

      args.push(arg)

      if (arg === 'q') break
    }

    if (args[0] === 'q') break

    console.log('result: ' + func(args[0], args[1], args[2], args[3]))
  }
}