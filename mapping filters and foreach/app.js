const users = [
    {
      firstName: "Aditi",
      lastName: "Sharma",
      age: 25,
      gender: "female",
    },
    {
      firstName: "Arnav",
      lastName: "Singh",
      age: 27,
      gender: "male",
    },
    {
      firstName: "Chhavi",
      lastName: "Mehta",
      age: 23,
      gender: "female",
    },
    {
      firstName: "Dhruv",
      lastName: "Agarwal",
      age: 28,
      gender: "male",
    },
    {
      firstName: "Eesha",
      lastName: "Gupta",
      age: 22,
      gender: "female",
    },
    {
      firstName: "Gaurav",
      lastName: "Dwivedi",
      age: 26,
      gender: "male",
    },
    {
      firstName: "Harsh",
      lastName: "Verma",
      age: 29,
      gender: "male",
    },
    {
      firstName: "Ishita",
      lastName: "Banerjee",
      age: 24,
      gender: "female",
    },
    {
      firstName: "Jatin",
      lastName: "Kumar",
      age: 20,
      gender: "male",
    },
  ];

// foreach
// let firstNames = users.forEach((user)=>{
//     console.log(user.firstName)
// })

// mapping
// let firstNames = users.map((user)=>{
//     return user.firstName + " " + user.lastName;
// })

// console.log(firstNames)


// let females = users.filter((user)=>{
//     return user.gender == 'female'
// }).map((user)=>{
//     return user.firstName;
// })

// console.log(females)


let males = users.filter((user)=>{
    
        return user.gender == 'male' && user.age> 25;
    
}).map((user)=>{
    return user.firstName
})

console.log(males)