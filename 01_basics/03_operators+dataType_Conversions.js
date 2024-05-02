let val = 33;//number 
console.log(typeof(String(val)))
let val1 = 33;//number 
console.log(typeof(String(val)))
 let val2 = "33abc"
 console.log(typeof(Number(val2)))//jabki yahan pe number print nahi hona chahiye tha 

 console.log(typeof(Number(NaN)) )
 console.log(typeof(Number(undefined)) )

 console.log(typeof(Number(true)))
 console.log(typeof(Number(false)) )

 console.log(typeof(Number("Srishti")) )
 console.log(Number("Srishti"))
 
 console.log(typeof(Number("")) )
 console.log(Number(""))

 console.log(typeof(Boolean("Srishti")) )
 console.log(Boolean("Srishti"))

 console.log(typeof(String(NaN)) )
 console.log(String(NaN)) 
 
 /////////////////////OPERATORS/////////////////
 console.log(2+3)
 console.log(2-3)
 console.log(2*3)
 console.log(2/3)
 console.log(2%3)
 console.log(2**3)

 let num = 3;
 let num_neg= -num;
 console.log(num_neg)

 let str1 = "Srishti "
 let str2 = "Chaturvedi"
 console.log(str1 + str2)

 console.log("1"+2)
 console.log(1+"2")
 console.log("1"+2+2)
 console.log(1+2+"3"+"3")
 console.log((3+5)*5%3)
 console.log(+true)
 console.log(+"")
 console.log(+"=")

 let num1 , num2 , num3 
 num1=num2=num3=2+2
 console.log(num1)


 let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


 

//  node 01_basics/03_datatype_converisons_and operators.js