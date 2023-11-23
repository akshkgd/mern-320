// console.log('task 1')
// setTimeout(()=>{
//     console.log('download started')
// }, 2000)
// console.log('download complete')



// let startDownload = new Promise((resolve, reject)=>{
//     console.log('download started')
//     setTimeout(()=>{
//             console.log('downloading...')
//             reject()
//         }, 3000)
// })

// startDownload.then(()=>{
//     console.log('download completed!')
// }, ()=>{
//     console.log('download failed!')
// })



// fetch => fetch data from url =>  promise



fetchQuote=()=> {
    let randomQuoteIndex = Math.floor(Math.random() * 15)
    console.log(randomQuoteIndex)
    fetch('https://type.fit/api/quotes').then((response) => {
        return response.json()
    }).then((quotes) => {
        document.getElementById('quote').innerText = quotes[randomQuoteIndex].text
        document.getElementById('author').innerText = quotes[randomQuoteIndex].author
        
    })
}


fetchQuote()



