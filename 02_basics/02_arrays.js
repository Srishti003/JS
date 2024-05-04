const vowels = ['a', 'e', 'i', 'o', 'u']
const conso = ['b', 'c', 'd', 'e']
vowels.push(conso)
console.log(vowels)//=>[ 'a', 'e', 'i', 'o', 'u', [ 'b', 'c', 'd', 'e' ] ]
console.log(vowels[5][2])//=>"d"

const nu =vowels.concat(conso)
console.log(nu)

const alp = [...vowels, ...conso]
console.log(alp);

const array_map = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const flat = array_map.flat(Infinity)
console.log(flat)


console.log("A", Array.isArray("Srishti"))
console.log("B",Array.from("Srishti"))
console.log("C",Array.from({name: "Srishti Chaturvedi"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))












// node 02_basics/02_arrays.js