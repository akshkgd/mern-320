// array
let arr = ['milk', 'bread', 'butter']
// console.log(arr)
// arr[1] = 'brown bread';
// to add a value in the end => push()
// to delete a value from end =>pop()
// arr.push('cheese')
// arr.pop();


// splice => splice(start number, deleteCount(how many items you want to delete))
// arr.splice(0, 3, 'coffee', 'apple')
// console.log(arr);


// objects
let user = {
    name: 'ashish',
    email: 'ashish@gmail.com',
    address: 'new delhi'
}
user.name = 'ashish shukla';
user.age = 25;
delete user.address;
// console.log(user)

// array of objects
// let arr = [{},{},{},{}]


let users = [
    {name: 'ashish', email: 'ashish@gmail.com'},
    {name: 'ayush', email: 'ayush@gmail.com'},
    {name: 'yash', email: 'yash@gmail.com'},
    {name: 'himanshu', email: 'himanshu@gmail.com'},
    {name: 'karan', email: 'karan@gmail.com'},
    {name: 'arpit', email: 'arpit@gmail.com'},
    {name: 'bhavna', email: 'bhavna@gmail.com'},
    {name: 'kunal', email: 'kunal@gmail.com'},
]
// Math.floor is used to remove the decimal values
// Math.random() is used to genereate the random values

let randomUser = Math.floor(Math.random()*users.length) 
console.log(users[randomUser].name, users[randomUser].email)






users.push({name: 'aarti', email: 'aarti@gmail.com'},)
users[0].name = 'ashish shukla'
users[0].age = 25
users.splice(2,1);
// console.log(users[randomUser]);
// console.log(users.length)
