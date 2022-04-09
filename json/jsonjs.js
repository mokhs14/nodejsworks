const fs = require('fs')

// const data = {
//     name: "mokhs",
//     planet: "earth",
//     age: 23
// }

// const tojson = JSON.stringify(data)

// fs.writeFileSync("json.json", tojson)

const jsonbuffer = fs.readFileSync("json.json")
const stringjson = jsonbuffer.toString()
const normaldata = JSON.parse(stringjson)
console.log(normaldata)
normaldata.name = "mohan"
console.log(normaldata)

const toJSON = JSON.stringify(normaldata)

fs.writeFileSync("json.json", toJSON)