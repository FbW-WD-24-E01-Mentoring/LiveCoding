//rest & spread operators

// ... depends on context where you are using these three dots.

// when you use ... with value it is called spread operator 
// when you use these ... with variable , it is called rest operator


function sum(a,b){
    console.log(a+b)
}

sum(2,3) // 5


sum(1,2,3) // 3 


function totalSum(...nums){
// rest will get all arguments/items and put inside an array .[1,2,3,4,5]
let total = 0; 
for(let i = 0; i<nums.length ;i++ ){
    total+=nums[i]
}

console.log(total)
}


totalSum(1,2,3,4,5) // 15


//destructuring array / object
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
let items = ["Naqvi", 24 , "Berlin","Cricket","Teacher" ]

// let name = items[0]
// let age = items[1]
// let city = items[2]
// let hobby = items[3]
// ...

/* let [name, age, city, hobby, profession] = items

console.log(`My name is ${name} ,I am ${age} years old, I live in ${city}`)  */




/* console.log(`My name is ${items[0]} ,I am ${items[1]} years old, I live in ${items[2]}`) */



/* let student = {
    name: "Leon",
    age: 34
} */

//destructure an object
//extracting out properties from an object
/* let {name, age} = student
console.log(name)
 console.log(age) */

/* console.log(student.name)
console.log(student.age) */



let numbers = [1,2,3,4,5,6,7,8,9,10,11]

let [a,b,c, ...d] = numbers
console.log(a) //1
console.log(b) //2
console.log(c) //3
console.log(d) // [4,5,6,7,8,9,10]





// spread ... 

let nums = [1,2,3]

console.log(...nums) // it will remove sqaure brackets from the array // remove curly brackets from an object  // 1,2,3


// merge twpo arrays together
let names = ["Leon","John","Joseph"]
let citiesNames= ["Berlin","Hamburg","Frankfurt"]

let mergedArray = [...names , ...citiesNames]
/*let mergedArray = "Leon","John","Joseph" ,  "Berlin","Hamburg","Frankfurt"
  */             

console.log(mergedArray)



let numbersArray = [1,2,3,4]
let randomNumbers = [34,5,3,46]

let mergedNumbers= [...numbersArray, ...randomNumbers]



// clone an array/object
let students= ["Lina","Smith","Robert"]
//wrong way reference type
/* let studentCopy = students;// created a copy 

studentCopy[3] = "Rana"

console.log(studentCopy)
console.log(students) */

let studentsCopy = [...students] //creating clone

studentsCopy[3]= "Rana"

console.log(studentsCopy)
console.log(students)



/* let a1 = 23; 
let b1 = a1; 
b1=30;
console.log(a1)
console.log(b1) */


let car = {
    model:"ab234",
    year:2005
}



let copyCar = {...car} //shallow clone/copy of an object

copyCar.year = 2006 ; 

console.log(car)
console.log(copyCar)