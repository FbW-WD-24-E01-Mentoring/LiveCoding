// high order functions

// function that will receive a function as an argument or return a function back.

/* function calculateSqaure(num){
    return num*num
}
calculateSqaure(4) // 16
calculateSqaure(2) // 4 */


/* function highOrderFunction(sqaureFunc,num){
    console.log("I am calculating sqaure of a number...")
    sqaureFunc(num)
} */



/* function highOrderFunction2(){
  return ()=>{
    console.log("I am returned function")
  }  
}
 */
/* highOrderFunction(calculateSqaure,5)  */// "I am calculating sqaure of a number... " 25"


// advanced Array Method

/* const numbers = [1,2,3,4,5] */

/* for(let i= 0; i< numbers.length; i++){
    console.log(numbers[i])
} */

// iterate over your array items
// forEach // it will always return undefined 
/* numbers.forEach((item, index, array)=>{
    return item
})

console.log(returnedValue) */


const numbers = [1,3,1,2,2,3,2,2,1,4,5,6,4,5,3,2,1] // [1, 9,  1,  4,  4,  9,  4,4, 1, 16, 25, 36, 16, 25,9, 4,  1]
/* function sqaureNumbersArray (array){
    let resultArray= []
    for(let i= 0; i<array.length; i++){
        resultArray.push(array[i]*array[i])
    }
    return resultArray
}

console.log(sqaureNumbersArray(numbers)) */

// map // returns new array ,it always return you same number of array back.
/* let sqauredArray = numbers.map(item=>item*item)
console.log(sqauredArray) */

/* [1,3,1,2,2,3,2,2,1,4,5,6,4,5,3,2,1] */ /// => [4,5,6,4,5] 



// filter // returns new array, it will return array with different length depending on condition.
/* let filteredNumbers = numbers.filter((item)=>item>3)
console.log(filteredNumbers) */



// [1,3,1,2,2,3,2,2,1,4,5,6,4,5,3,2,1] => {"1": 4, "2":5 , ...}
// [1,3,1,2,2,3,2,2,1,4,5,6,4,5,3,2,1] => 47

/* [1,3,1,2,2,3,2,2,1,4,5,6,4,5,3,2,1] */ /// => [4,5,6,4,5]


// reduce // returns new value(array, object, string, number, boolean , any datatype)

/* let result= numbers.reduce((accumulator, currentItem)=>{
    if(accumulator[currentItem]){
       accumulator[currentItem]++; 
    }else{
        accumulator[currentItem] = 1;
    }
    return accumulator
}, {} )

console.log(result) */


/* let sum = numbers.reduce((acc, item)=>acc+=item, 0)
console.log(sum) */



/* let reducedItems = numbers.reduce((acc,item)=> {
    if(item>3){
        acc.push(item)
    }
    return acc
}, [])

console.log(reducedItems) */



/* let items = ["berlin","frankfurt","bonn","hamburg"] //=> true


let foundCity =  items.reduce((acc,item)=>{
     if(item === "bonn"){
        acc=true
     }
     return acc
}, false)
console.log(foundCity) */


