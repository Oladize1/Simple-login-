const express = require("express")
const app = express()
const port = 8080
const path = require("path")
//const cors = require("cors")
const people = require('./data')
//app.use(cors())
app.use(express.static('./public'))
app.use(express.json())
const middleware = express.urlencoded({ extended: false })


app.get('/people', (req, res) => {
  res.status(200).json({ "success": true, 'message': people })
})

app.post('/login', (req, res) => {
  const {name} = req.body
  if (name) {
    return res.status(200).send(`<h1>welcome ${(name)}</h1>`)
  }
  console.log(name)
  return res.status(404).json({ success: false, msg: "pls input your name " })
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})