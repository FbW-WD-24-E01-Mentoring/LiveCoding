// numeric loop // for loop
// conditional loop // while do/while loop


//use for loop when you want to repeat any action again and again 


// for(initialization ; condition ; increment/decrement ){ code .....}

/* for(let i=1; i<=10 ;i++ ){ 
    console.log(i)
}
 */



// initialization
//while(condition){
    // code ...
    // increment/decrement
// }

/* let i = 1; 
while(i<=10){
    console.log(i)
    i++;
} */

/* const prompt = require("prompt-sync")()



const randomNumber = Math.ceil(Math.random()*10)// creating random number from 1-10 
console.log(randomNumber)


let guessingNumber = +prompt("Please guess number from 1 to 10 : ")

while(randomNumber !== guessingNumber){
    guessingNumber = +prompt("Please guess number again from 1 to 10 : ")
}

console.log("you win the game! ") */


/* const prompt = require("prompt-sync")() */



/* 
const randomNumber = Math.ceil(Math.random()*10)// creating random number from 1-10 
console.log(randomNumber) // 3


let guessingNumber = 3

while(randomNumber !== guessingNumber){
    guessingNumber = +prompt("Please guess number from 1 to 10 : ")
}

console.log("you win the game! ") */


/* const randomNumber = Math.ceil(Math.random()*10)// creating random number from 1-10 
console.log(randomNumber)

let guessingNumber = 3
do {
    guessingNumber = +prompt("Please guess number from 1 to 10 : ")
} 
while(randomNumber !== guessingNumber)

console.log("you win the game! ") */





/*  1 * 1 = 1     2 * 1 = 2  
    1 * 2 = 2     2 * 2 = 4
    1 * 3 = 3     2 * 3 = 6 
...          ....
...          .... */
   

// Actions 
// first action print 1 - 10 10 times each 
// second action print numbers from 1 - 10 10 times 


/* for(let i = 1 ; i<=10 ; i++){
    for(let j = 1 ;j<=10 ; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
} */

/* sun, mon,  tue,   wed,    thur,   fri,    sat
     0 ,   1,   2,     3,       4,     5 ,   6  */
const day = new Date().getDay()
console.log(day)


/* if(day === 0 ){
    console.log("Today is Sunday !")
}else if(day ===1 ){
    console.log("Today is Monday !")
}else if(day ===2 ){
    console.log("Today is Tuesday !")
}else if(day ===3 ){
    console.log("Today is Wednesday !")
}else if(day ===4 ){
    console.log("Today is Thursday !")
}else if(day ===5 ){
    console.log("Today is Friday !")
}else{
    console.log("Today is Saturday !")
} */


//Use the switch statement to select one of many code blocks to be executed.

switch(day){
    case 0 :
        console.log("Today is Sunday !")
        break;
    case 1 : 
         console.log("Today is Monday !")
         break;
    case 2 :
        console.log("Today is Tuesday !")
        break;
    case 3 : 
        console.log("Today is Wednesday !")
        break;
    case 4 : 
        console.log("Today is Thursday !")
        break; 
    case 5 : 
        console.log("Today is Friday !")
        break;
    default:
        console.log("Today is Saturday !")
}

/* This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed. */


// expression is a value or something that turns into value. => (1+1) (1===1) (2) (true) 
// statement is a instruction.  =>  const name = "John"
 