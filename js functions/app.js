// conditionals
// age range
// if the age is less than 12 => can not participate
// if the age is between 12 to 16 => under 16 comp.
// if the age is between 17 to 20 => can participate in senior level
// else age is greater than 20 can not participate

let age = 19;

// if(age<12){
//     console.log('can not participate')
// }
// // && only executes when both the conditions are correct
// else if(age >= 12 && age <= 16){
//     console.log('under 16')
// }
// else if(age >=17 && age <=20){
//     console.log('senior level')
// }
// else{
//     console.log('can not participate')
// }

// ternary operator
// condition ?(true) {true} :(else) {false}
// age>= 18 ? console.log('eligible to vote') : console.log('not eligible to vote');



// functions is a reusable code to perform same task when we want

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('onions')


// function add(a, b){
    
//     return a+b;
// }

// let sum1 = add(2,3)
// let sum2 = add(12,45)

// console.log(sum1, sum2)


function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the bootcamp live!'
    let btn = document.getElementById('btn');
    // btn.style.display = 'none'
    btn.style.backgroundColor = 'blueviolet'
}