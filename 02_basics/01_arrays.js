// array 
const myArr = [0, 1, 2, 3, 4, 5, true , "Srishti", NaN, undefined, 3]
console.log(myArr.length)

console.log(myArr[11])//=>undefined 
//ArrayMethods

myArr.push(34)
myArr.push(76)
myArr.pop()
myArr.unshift(434)// 0th index par element add ho jata hai
myArr.shift() //0th index pe jo bhi element hota hai usko yeh uda deta hai
myArr.shift()

console.log(myArr.includes(4))
console.log(myArr.indexOf(undefined))

console.log("......")
const crr = myArr
console.log(crr == myArr)
console.log(crr === myArr)

//yeh uppar se prove hota hai ki yeh direct call by reference hai

const brr = myArr.join()

console.log(myArr)
console.log(brr);


console.log("**********************");
console.log('Slice/Splice')
myArr.pop()
myArr.pop()
myArr.pop()
myArr.pop()
myArr.pop()
myArr.pop()

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);
//splice me 



//node 02_basics/01_arrays.js