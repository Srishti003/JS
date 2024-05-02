//Stack Memory ->Primitive, copy milta h

//Heap Memory ->Non =Primitve, refernce milta hai

let name ="Srishti"
let new_name = name 
console.log(new_name)
new_name = "Chaturvedi"
console.log(new_name)
console.log(name)

// yeh neeche advanced wale hai toh direct reference
let user ={
    email:"jj@gmail.com",
    upi:1234
}

let new_user = user
 new_user.upi=3456
 console.log(new_user)
 console.log(user)

