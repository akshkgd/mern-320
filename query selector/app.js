// let btn = document.getElementById('btn');
// clickHandler = (event)=>{
//     console.log(event)
// }
// btn.addEventListener('click', clickHandler)

// let btn = document.querySelector('.btn')
let btns = document.querySelectorAll('.btn')
// console.log(btns)

// btns.addEventListener('click', (e)=>{
//     console.log(e.target.innerText +  " was clicked!")
// })



// btns.forEach((btn)=>{
//         btn.addEventListener('mouseout', (e)=>{
//             console.log(e.target.innerText +  " was hovered!")
//         })
// })

// console.log(result)



let nameInput = document.getElementById('name')

nameInput.addEventListener('keyup', (e)=>{
    console.log(e.key)
})


nameInput.addEventListener('click', ()=>{
    console.log('user is now entering the name')
})