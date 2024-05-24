/* const user = {
    name:"Ali",
    age:23,
    address:{city:"Berlin"},
    printName(){
        console.log(this.name)
    }
}

const copy = structuredClone(user)

console.log(copy) */


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    purchaseHistory: [
      {
        productName: "apple",
        quantity: 5,
        datePurchased: new Date()
      },
      {
        productName: "banana",
        quantity: 3,
        datePurchased: new Date()
      },
      {
        productName: "pear",
        quantity: 4,
        datePurchased: new Date()
      }
    ]
  };
  
  const clone = structuredClone(person);
  
  console.assert(clone !== person); // two distinct objects
  console.assert(clone.firstName === "John"); // same values
  