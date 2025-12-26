// Variable hoisting with Var
console.log('Name is ',name); // variable wasting
var name="Tom";
console.log('Name is', name);

// name doesnt execute due to execute context 
//What happens internally:
// 1. Creation Phase: var name = undefined
// 2. Execution Phase:
//    - console.log(name) → undefined
//    - name = "Tom" → assignment
//    - console.log(name) → "Tom"

// variable hoisting with let and const

// let and const
console.log(name2); // ReferenceError: Cannot access 'name2' before initialization
let name2="Tom";
console.log(name2)
// What happens internally:
// 1. Creation Phase: let name = <uninitialized> (NOT undefined!)
// 2. Execution Phase: 
//    - console.log(name) → ReferenceError (still uninitialized)

//Function declaration
chase();
function chase(){
    console.log("Chase");
    caught()
}

function caught()
{
    console.log("caught")
}
// What happens:
// 1. Creation Phase: Both functions stored in memory
// 2. Execution Phase: Functions can be called anywhere

//Function expression
test();
var test=function(){
    console.log("test");
}

// What happens:
// 1. Creation Phase: var test = undefined
// 2. Execution Phase: 
//    - test() → TypeError (undefined is not a function)
//    - test = function() {...} → assignment happens later

//TDZ (Temporal Dead Zone)
console.log(name3); // ❌ ReferenceError (in TDZ)
    let name3 = "TapScript"; // TDZ ends here
    console.log(name3); // ✅ "TapScript" (outside TDZ)
