const names = require('./names')
const sayHi = require('./Units')
const data = require('./alternative')

console.log(data.items, data.singlePerson.name)
sayHi(names.john)
sayHi(names.susan)
sayHi('DogShit')
