const express = require('express');
const ejs = require('ejs')
const app = express();
app.set('view engine', 'ejs')

// get and Post request

app.get('/', (req,res)=>{
    console.log(req)
    res.render('home', {name: 'Ashish'})
})
app.get('/about', (req,res)=>{
    res.send('<h1>This is the about page</h1>')
})
app.get('*', (req,res)=>{
    res.send('<h1>This page does not exist!</h1>')
})


app.listen(8000, ()=>{
    console.log('server is running on port 8000')
})