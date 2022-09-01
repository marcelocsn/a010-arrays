const primeiroArray = [13, 8, 25, 51]
const segundoArray = ["Marcelo", "Vanessa", "Théo"]
const terceiroArray = [25, "Marcelo", true]

const primeiroArrayCopia = primeiroArray.slice()
const segundoArrayCopia = segundoArray.slice()
const terceiroArrayCopia = terceiroArray.slice() 

primeiroArrayCopia.push(12)
segundoArrayCopia.pop()
terceiroArrayCopia.splice(1,1)

console.log (primeiroArray, primeiroArrayCopia)
console.log (segundoArray, segundoArrayCopia)
console.log (terceiroArray, terceiroArrayCopia)
