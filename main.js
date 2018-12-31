const algorithms = require('./src/algorithms.js')
const rl = require('readline-sync')
const getParams = require('get-parameter-names')

let algoNames = Object.keys(algorithms)

let formatFuncName = (func) => {
  let titledFunc = ''

  for (let i in func) {
    let char = func[i]

    if (char === char.toUpperCase()) {
      titledFunc += ' ' + char
    }
    else {
      titledFunc += char.toUpperCase()
    }
  }

  return titledFunc
}

while (true) {
  console.clear()

  console.log("LIST OF FUNCTIONS\n(enter 'q' to quit)\n")

  for (let i in algoNames) {
    let menuItem = i < 10 ? '\t ' : '\t'

    menuItem += `${i}  ${formatFuncName(algoNames[i])}`
    
    console.log(menuItem)
  }

  let index = rl.question('\nPick a number: ')

  if (index === 'q') {
    console.clear()
    break
  }

  let funcName = algoNames[index]
  let func = algorithms[funcName]

  console.clear()

  console.log(formatFuncName(funcName))
  console.log("(enter 'q' to return to menu)\n")

  while (true) {
    let params = getParams(func)
    let args = []

    for (let param of params) {
      let arg = rl.question(param + ': ')

      args.push(arg)

      if (arg === 'q') break
    }

    if (args[0] === 'q') break

    console.log('result: ' + func(args[0], args[1], args[2], args[3]))
    console.log()
  }
}