const express = require("express")
const app = express()
const port = 8080 
const people = require('./data')
app.use(express.static('./src'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/people', (req, res) => {
  res.status(200).json(people)
})

app.post('/login', (req, res)=>{
  const {name} = req.body 
  if(name){
    return res.status(200).json({success:true, msg:`welcome ${name} `})
  }
   return res.status(404).json({success:false, msg:"pls input your name "})
})

app.listen(port, ()=>{
  console.log(`server listening on port ${port}`)
})