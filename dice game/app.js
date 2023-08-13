let dice = document.getElementById('dice');
let number = document.getElementById('number')
let audio = document.getElementById('dice-audio')
function roll(){
    dice.classList.add('roll-dice')
    audio.play();
    number.innerText = ''
    setTimeout(() => {
        let random = Math.floor(Math.random()*6)
        dice.classList.remove('roll-dice')
        number.innerText = random;
    }, 1200);
}