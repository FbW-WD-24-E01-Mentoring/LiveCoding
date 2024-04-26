/* console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World") */


// loop
// do something again and again
// numeric loop (for loop) 
// conditional loop (while) (do while)



// (){}

// if (condition){}

// function (parameter){}

// for (initialization; condition ; increment/decrement){}

// switch (condition){}


// for(initialization ; condition ; increment/decrement){ code ... }


/* for(let i= 0 ; i < 20 ; i++ ){
    console.log("Hello World", i+1)
} */




/* for(let i= 1 ; i <= 20 ; i++ ){
    if(i === 10){
        break;
    }
    console.log(i)
} */


/* for(let i = 20 ; i > 0 ; i-- ){
    console.log(i)
} */


/* for(let i = 0 ; i <= 100 ; i+=2){
    console.log(i)
}
 */

let sum = 0;

for(let i = 1 ; i<=10 ; i++){
    //first round  //second round  //third round 
    // i = 1       // i = 2        // i =3
    sum = sum + i ;
    // sum = 0+1 => 1   sum = 1+2 => 3  sum = 3 + 3 => 6 

}

console.log(sum)


/* 

Create an empty string and a loop that goes from 0 to 50.
 * Inside the loop, check if the current index is divisible by 2, 3 or 5:
 * - if it's divisible by 2, add a 2 to the string
 * - if it's divisible by 3, add a 3 to the string
 * - if it's divisible by 5, add a 5 to the string
 * - otherwise, add an underscore `_` to the string 
 * 
 * At the end, print the string to the console
 * 
 * Expected output:
 * 2_23252_232_2_232_2_232_25232_2_23252_232_2_232_2_2
 
*/

let result = ""

//coercion // Type coercion refers to the automatic conversion of values from one data type to another

for(let i = 0 ; i <= 50 ;i++){
    if(i % 2 === 0 ){
        result+= 2
    }else if(i % 3 === 0 ){
        result+= 3
    }else if(i %5 === 0 ){
        result+= 5
    }else{
        result += "_"
    }
}

console.log(result) // 2_23252_232_2_232_2_232_25232_2_23252_232_2_232_2_2
