require('dotenv').config()
const express=require('express')
const app=express()
const port =process.env.PORT
app.get('/',(req,res)=>{
    res.send('hello ji')
})

app.get('/sanu',(req,res)=>{
    res.send('hello sanu')
})


app.listen(port,()=>console.log(`server is running at ${port}`))