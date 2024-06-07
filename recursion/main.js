// recursion
// when the function call itself it is called recursion

/* let i = 0;

function func(){
    console.log("hello")
    i++;
    if(i===10){
        return;
    }
    func()
}

func() */

//find factorial
// 8*7*6*5*4*3*2*1

/* function factorial(num){  //8
    if(num >= 1){  
       return num * factorial(num-1)  // 4*3*2*1*1
    } 
    else {
        return 1;
    }
}

console.log(factorial(4)) */

/* function sum(){
   by default funciton will always return undefined
}

console.log(sum()) */

const messages = [
  {
    user: "John",
    sms: "Hello",
    reply: [
      {
        user: "Naqvi",
        sms: "hi John",
        reply: [{ user: "john", sms: "whats up Naqvi", reply: [{user:"Naqvi", sms:"what are you doing john?", reply:[]}] }],
      },
    ],
  },
  {
    user: "Robbin",
    sms: "hi",
    reply: [{ user: "Joseph", sms: "welcome Robbin", reply: [] }],
  },
];


/* function printMessages(messages){
    for(let i = 0; i < messages.length; i++){
        console.log(messages[i].user)
        console.log(messages[i].sms)
        printMessages(messages[i].reply)
    }
}

printMessages(messages) */