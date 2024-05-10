// function
// function is a keyword
// function is  block of code designed to perform a specific task.
// function will execute when someone will invoke/call that function.

/* { 
    let name = "Naqvi"
    console.log(name)
} */

//function definition
function createRandomNumber(){ //block of code
    console.log(Math.random())
}
/* console.log("Hello World") */
// invoking/calling function
/* createRandomNumber() */


// return statement
function getNumber(){
 let randomNumber = Math.ceil(Math.random()*10) // 1 - 10
  return randomNumber 
  

  //by default return undefined
}

/* let returnedNumber = getNumber()
console.log(returnedNumber) */

/* console.log(getNumber()) */

//function parameters and arguments

/* function printData(name,greetmessage){
    console.log("hello")
    console.log(name)
    console.log(greetmessage)
}

//printData(argument)
printData("Naqvi","Good Morning!")
printData("Robert","Good Afternoon!") */



//task 1

function isNumberInRange(number,min,max){
    if(number >= min && number <= max){
        return true
    }else{
        return false
    }
}
/* console.log(isNumberInRange(2, 0, 5)); // true
console.log(isNumberInRange(10, 0, 5)); // false
console.log(isNumberInRange(100, 50, 500)); // true
console.log(isNumberInRange(-1, -50, 50)); // true
console.log(isNumberInRange(0, -50, 50)); // true */

/* function isNumberInRange(number,min,max){
   return (number >= min && number <= max)
} */


//task 2

function endsWithIng(string){
    if(string.slice(-3).toLowerCase() === "ing"){
        return true
    }else{
        return false
    }
}

/* console.log(endsWithIng("hello")); // false
console.log(endsWithIng("going")); // true
console.log(endsWithIng("ALAN TURING")); // true
console.log(endsWithIng("ding ding")); // true
console.log(endsWithIng("making of")); // false
 */
/* function endsWithIng(string){
    return string.slice(-3).toLowerCase() === "ing"
} */



//task 3

function startsWithThe(string){
    if(string.slice(0,3).toLowerCase() === "the"){
        return true
    }else{
        return false
    }
}

/* console.log(startsWithThe("hello")); // false
console.log(startsWithThe("theremin")); // true
console.log(startsWithThe("The Clash")); // true
console.log(startsWithThe("ding ding")); // false 
console.log(startsWithThe("making of")); // false */


//task 4

function isFirstLetterLowerCase(string){
    console.log((string[0] === string[0].toLowerCase()))
}

/* isFirstLetterLowerCase("hello"); // true
isFirstLetterLowerCase("Hello"); // false
isFirstLetterLowerCase("Bianca"); // false
isFirstLetterLowerCase("jim"); // true
isFirstLetterLowerCase(""); // false
isFirstLetterLowerCase("A"); // false  */


//task 5

function cheaperThan(prices, number ){
    let resultArray= []
    for(let i = 0; i< prices.length ; i++){
        if(prices[i]<number){
            resultArray.push(prices[i])
        }
    }
    return resultArray
}


/* console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20)); // [19.99, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90)); // [19.99, 29.87, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0)); // []
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5)); // [2.9] */



//task 6

function wordsThatEndWithIng(wordsArray){
    let resultArray= []
    for(let i= 0; i<wordsArray.length;i++){
        if(wordsArray[i].slice(-3).toLowerCase()==="ing"){
            resultArray.push(wordsArray[i])
        }
    }
    return resultArray
}
/* console.log(wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"])); // ["working", "ping"]
console.log(wordsThatEndWithIng(["table", "jeans", "small"])); // []
console.log(wordsThatEndWithIng(["walking", "ing"])); // ["walking", "ing"] */


//task 8

function onlyLongWords(sentence){
    let result = []
    let wordsArray = sentence.split(" ")
    for(let i=0; i<wordsArray.length ;i++){
        if(wordsArray[i].length >= 5){
            result.push(wordsArray[i])       
         }
    }
    return result.join(" ")
}

console.log(onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit")); // "Welcome Wikipedia encyclopedia anyone"
console.log(onlyLongWords("The cat is on the table")); // "table"
console.log(onlyLongWords("not many long ones here")); // ""



/* let sentence ="Welcome to Wikipedia the free encyclopedia that anyone can edit"
console.log(sentence.split(" ").length) */



//task 9

function addLeadingZero(numbersArray){
    let resultArray = []
    for(let i=0; i<numbersArray.length;i++){
        if(numbersArray[i]<10){
            //coercion
           resultArray.push("0"+numbersArray[i]) 
        }else{
            resultArray.push(numbersArray[i].toString()) 
        }
    }
    return resultArray
}

console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12]));// ["00", "01", "02", "03", "10", "11", "12"]
console.log(addLeadingZero([1, 100]));// ["01", "100"]
console.log(addLeadingZero([1, 2, 3])); //["01", "02", "03"]