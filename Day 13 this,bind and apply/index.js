console.log("Day 13. The this keyword");
// purpose : it can helo us nderstand what exactly happenign in the particualr execution context
// this means pointing to something
// Global

// this keyword and window object
//this === window
console.log("This at the global", this); // window

// Binding
// Inside of an object - implicit binding
// ay in whioch you understand that is if a method is called on an object using the dot notation, the context of this is bound or associated to the object on which we have invoked
const employee ={
    id:"A5778",
    firstName: "Alex",
    lastName: "B",
     returnThis: function () {
        return this;
     }
}
console.log(employee.id);
console.log("this value", employee.returnThis());