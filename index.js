
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/home', (req, res) => {
  res.send('Codewith.sahil!')
})
app.get('/about',(req,res)=>{
    res.send("this is the about page section")
})
app.get('/html',(req,res)=>{
res.send(`<h1>this is the html file</h1>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})