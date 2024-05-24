const _ = require("lodash")
const moment = require("moment")
// destructuring an Array

const randomItems = ["John",24, "Berlin","Tennis"]

/* const name = randomItems[0]
const age = randomItems[1] */

const [name, age, city, hobby] = randomItems

/* console.log(name)
console.log(age)
console.log(city)
console.log(hobby) */



// destructuring an Object

const student = {
    rollNumber:123,
    city:"Hamburg",
    grade:"A"
}

//rename properties
/* const {rollNumber,city:studentCity , grade } = student
console.log(studentCity) */

// destructure nested objects properties
const user = {
    name:"Robin",
    address:{
        city:"Berlin",
        contact: {
            mobile:"01321413425"
        }
    }
}


const {name:userName,address:{city:userCity, contact:{mobile}} } = user

/* console.log(userCity)
console.log(mobile) */



/* function printStudentInfo(student){
    console.log(`Student name is ${student.name} ,he is from ${student.country}, he is in ${student.course} course!`)
    console.log(`${student.name} got A grade in exam!`)
} */

// extract out properties from an object {property_name1, property_name2, ....}
function printStudentInfo({name, country,course}){
    console.log(`Student name is ${name} ,he is from ${country}, he is in ${course} course!`)
    console.log(`${name} got A grade in exam!`)
}

/* printStudentInfo({name:"Naqvi", country:"Germany", course:"Web Dev"}) */





// spread & rest operators ...

/* const numbers = [1,2,3,4]

console.log(numbers)  //=> console.log([1,2,3,4]) 
console.log(...numbers)  //=> console.log(1,2,3,4) 
console.log("hello","world") */


const item= {numbers: 10, name:"iphones"}
/* console.log(...item) */ //=> console.log(numbers: 10, name: 'iphones')


// value comparison
// reference comparison

//primitive types (string, number, boolean)
const a = "Hello"
const b = "Hello"
const c = 24;
console.log(a===b) //value comparison //= > true "Hello"==="Hello"

//object type
const num1 = [1,2,3,4,5,6,7,8,9,10,23,45,6,7]
const num2 = [1,2,3,4,5]
console.log(num1===num2) // reference comparison //= > false (001 === 002 )


/* const copynum1 = num1 ;
 console.log(copynum1 === num1) //=> true

 copynum1.push(4)

 console.log(num1) */


 const copynum2 = [...num1] //shallow clone




const student1 = {
    name:"Robert", 
    address: {
        city:"Berlin"
    }
}

const copyStudent1 = {...student1} //shallow clone

copyStudent1.address.city="Bonn"

console.log(student1)



//JSON Object

const userOne = {
    age:34,
    contact:{
        mobile:"231243432245"
    },
    printAge(){
        console.log(this.age)
    },
    hello(){
        "hello world"
    }
}


const deepCloneUserOne = _.cloneDeep(userOne) //deep clone 100%

console.log(deepCloneUserOne)
/* const convertedUserOne = JSON.stringify(userOne)  //=> "{"age":"34" ..."}"

const copyUserOne = JSON.parse(convertedUserOne) // deep clone // not 100%


console.log(copyUserOne) */



/* copyUserOne.contact.mobile="123456" */



/* const copyUserOne2 = structuredClone(userOne) */ // deep clone // not 100%

/* console.log(moment().format('dddd')) */