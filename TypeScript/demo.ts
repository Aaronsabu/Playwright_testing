let msg:String = "Hello";
let msg2:any = "World";  //if we don't know the type then we can put it as 'any'
//msg2 = 22 //this is not possible in typescript as we cannot change the type of variable

let age:number = 30
let bool:boolean = true

let arry:number[]=[1,5,10]

console.log(msg,msg2,age,bool,arry);

function add(a:number,b:number):number { //we specify the type of return as well here
    return a+b;
}

console.log(add(10,20));

//let user = {name:"aaron", age: 24,} //this is normal js format
let user:{name: String, age:number, location:String} = {name:"aaron", age: 24, location:"Kottayam"} //this ishow we declare object in typescript
console.log(user.name);
//user.location = "Kottayam" //this is how we add value in javascript but in typescript it is not possible 