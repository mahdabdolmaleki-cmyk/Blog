const express = require('express')
const mongoose = require('mongoose')
const blogroutes = require('./routes/blogroutes')

const app = express()

app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded())

mongoose.connect('mongodb://localhost:27017')
.then(res=> { console.log('connected to DB')})
.catch(err => console.log(err))

app.use(blogroutes)

app.get('/creat',(req,res)=>{
    res.render('creat')
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.use((req,res)=>{
    res.render('404.ejs')
})

app.listen(3000)