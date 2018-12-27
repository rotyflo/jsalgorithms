const basic = require('./src/basic.js')
const projects = require('./src/projects.js')
const rl = require('readline-sync')
const getArgs = require('get-parameter-names')

let basicNames = Object.keys(basic)
let projectNames = Object.keys(projects)
let funcNames = [...basicNames, ...projectNames]
let descriptions = basic['descriptions']

console.log('\nLIST OF FUNCTIONS')

for (let i = 0; i < funcNames.length; i++) console.log(`  ${i}. ${funcNames[i]}`)

let index = rl.question('\nPick a number: ')
let selectedFunc = funcNames[index]
let selectedModule

if (basicNames.indexOf(selectedFunc) >= 0) selectedModule = basic
else if (projectNames.indexOf(selectedFunc) >= 0) selectedModule = projects

console.log('\n' + selectedFunc)

let args = getArgs(selectedModule[selectedFunc])

let inputs = []

for (let i = 0; i < args.length; i++) {
  inputs.push(rl.question(args[i] + ': '))
}

console.log('result: ' + selectedModule[selectedFunc](
  inputs[0],
  inputs[1],
  inputs[2],
  inputs[3]))