const express=require('express')
const app=express()

app.get('/names', (req, res)=>{
    res.send("amine");
})

app.listen(3000, ()=>{
    console.log("serveur is running on server 3000");
})