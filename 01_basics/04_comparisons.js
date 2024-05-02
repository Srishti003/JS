console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<0);

console.log("2"==2);
console.log("2"===2)


///////////Primitive Datatypes///////////
// 7 types --> call by value(copy krke reference dete h)
//String, Number, Boolean, null, undefined, 
//symbol (kisi bhi balue ko unique banane ke liye use krte hai), BigInt

 const id = Symbol('123')
 const idd = Symbol('123')

 console.log(id===idd)

const bigo = 127456374183228438528674n

//////////Reference (Non Primitive Datatypes)---> call  by reference
//array, objects , functions


//datatypes of array -> function, objects -> function, function ->object function

const heros= ["dance", "singing", "sport"]
let myObj= {
    name: "srishti",
    age : 22,
}
//null is an object 

const myFunction = function(){
    console.log("First function")
}

//it is a dynamically typed language - datatype automatically set ho jta hai



