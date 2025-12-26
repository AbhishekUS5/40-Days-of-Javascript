let a=5;
function testMe()
{
    console.log("Inside testme");
    let b=10;
    let user = {name: "Tapas", country: "India"};
    function testAgain(){
        console.log("Inside testAgain");
    }
    testAgain();
    console.log("After testAgain");
}
testMe();
console.log("End");