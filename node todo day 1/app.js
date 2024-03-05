const express  =require('express');
const Razorpay = require('razorpay');
const ejs = require('ejs');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const mongoDbSession = require('connect-mongodb-session')(session);
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

// coneecting mongoDB to Database
mongoose.connect('mongodb+srv://codekaro:codekaro123@cluster0.jbskqqt.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('DB connected!')
})
const store = new mongoDbSession({
    uri: 'mongodb+srv://codekaro:codekaro123@cluster0.jbskqqt.mongodb.net/?retryWrites=true&w=majority',
    collection: 'sessions'
})
const razorpay = new Razorpay({
    key_id: 'rzp_live_ZNanLWNgTFcC9J', 
    key_secret: 'KAWO5Sr5P4fk7esa6JvSeR9O'
})
app.use(session({
    secret: 'This is the biggest secret',
    resave: false,
    saveUninitialized: false,
    store: store
}))


const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    dueDate :{type: String},
    addedBy: {type: String}
})
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique:true, required: true},
    password: {type: String, required:true},
    api:{type: String, unique:true},
    role: {type: Number, default:0},
    hasPiad: {type: Boolean, default:false},
    paymentOrderId: {type: String, }
    // role 0 means that the user is normal user if its 1 than its admin
})
// model
const Todos = mongoose.model('todos', todoSchema)
const Users = mongoose.model('users', userSchema)

// middleware

const isAuth = (req,res,next) =>{
    if(req.session.isAuth == true){
        next()
    }
    else{
        res.redirect('/login')
    }
}

const isAdmin = (req,res,next) =>{
    if(req.session.isAdmin == true){
        next()
    }
    else{
        res.redirect('/login')
    }
}

app.get('/', (req,res)=>{
    res.render('welcome')
})
app.get('/upgrade', (req,res)=>{
    var instance = new Razorpay({ key_id: 'rzp_live_ZNanLWNgTFcC9J', key_secret: 'KAWO5Sr5P4fk7esa6JvSeR9O' })

    instance.orders.create({
    amount: 500,
    currency: "INR",
    receipt: "receipt#1",});
    res.render('checkout', {user: req.session.user, order: instance});
})

app.get('/login', (req,res)=>{
    res.render('login')
})
app.get('/register', (req,res)=>{
    res.render('register')
})
app.post('/add-user',async (req,res)=>{
    let {name, email, password} = req.body;
    let data = new Users({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 9)
    })
    data.save();
    res.redirect('/')
})
app.post('/auth', async(req,res)=>{
    let {email, password} = req.body;
    let user = await Users.findOne({email: email});
    if(user){
        let isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid){
            if(user.role == 0){
                req.session.isAuth = true;
                req.session.user = user;
                res.redirect('/todos')
            }
            else if(user.role == 1){
                req.session.isAuth = true;
                req.session.user = user;
                req.session.isAdmin = true;
                res.redirect('/dashboard')
            }
            else{
                res.redirect('/login')
            }
            
        }
        else{
            res.redirect('/login')
        }
    }
    
    
    
})
app.get('/logout', (req,res)=>{
    req.session.destroy();
    res.redirect('/')
})
app.get('/api-access', async(req,res)=>{
    let userDetails = await Users.findOne({email: req.session.user.email})
    res.render('api', {user:userDetails})
})
app.get('/create-api', async(req,res)=>{
    let loggedInUser = req.session.user;
    let user = await Users.findOne({email: loggedInUser.email});
    let api = Math.floor(Math.random()*100000000);
    user.api = api;
    await user.save();
    res.redirect('/api-access')
})
app.get('/todos', isAuth, async(req,res)=>{
    let todos = await Todos.find({addedBy: req.session.user.email})
    // todos.sort((a,b)=>new Date(a.dueDate) - new Date(b.dueDate))
    res.render('index', {todos: todos, user: req.session.user})
})
app.get('/dashboard', isAdmin, async(req,res)=>{
    let users = await Users.find({role: 0});
    res.render('dashboard',{ user: req.session.user, users: users})
})
app.post('/add-task', (req,res)=>{
    let {todo} = req.body;
    let data = new Todos({
        title: todo,
        dueDate: 'data',
        addedBy: req.session.user.email,
    })
    data.save();
    res.redirect('/todos');
})
app.post('/delete-user', async(req,res)=>{
    let email = req.body.email;
    let data = await Users.deleteOne({email: email});
    let todosData = await Todos.deleteMany({addedBy: email})
    res.redirect('/dashboard')
})
// api routes
app.get('/api/users/:email', async(req,res)=>{
    let userEmail = req.params.email;
    let users = await Users.find({email: userEmail});
    if(users.length > 0){
        res.json(users)
    }
    else{
     res.json('User does not exist!')
    }
})

app.get('/api/todos/:api',async (req,res)=>{
    let api = req.params.api;
    let user = await Users.findOne({api: api});
    if(user == null){
        res.json('API is not Authorized!')
    }
    else{
        let todos = await Todos.find({addedBy: user.email});
        if(todos.length > 0){
            res.json(todos)
        }
        else{
            res.json('No todos created!')
        }
    }
    
})

app.listen(8000, ()=>{
    console.log('server is running on port 8000')
})