var msg = "Hello";
var msg2 = "World"; //if we don't know the type then we can put it as 'any'
//msg2 = 22 //this is not possible in typescript as we cannot change the type of variable
var age = 30;
var bool = true;
var arry = [1, 5, 10];
console.log(msg, msg2, age, bool, arry);
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
