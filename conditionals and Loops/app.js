// primitive and reference
// data types primitive and reference
// primitive => string, number, boolean 
// reference => [] {}

// let a =true;
// let b = a;
// b = 7;

// // let a = [1,2,3]
// // let b = a;
// // b.pop()

// console.log(a, b)

// let  a = 5;
// let b = a;
// b =10;

// console.log(a,b)



// let a = [1,2,3]
// let b = a;
// b.push(4)

// console.log(a,b)



// conditionals
// anything that is true or false or converted to true or false weca n write that inside condition
// if(""){
//     console.log('party 🥳')
// }
// else{
//     console.log('movie 🍿')
// }

// thruthy and falsy
// falsy => 0 -0 "" '' NaN undefined null
// truthy => execute as true condition
let x = 24;
console.log(typeof x)



let name = prompt("Enter the name")
let age = prompt("Enter the age")
if(typeof age == "number"){
if(age > 18){
    console.log(name + ' is eligibe to vote!!')
}
else{
    console.log(name + ' is not eligibe to vote!!')

}
}
else{
    console.log('Enter the correct age')
}