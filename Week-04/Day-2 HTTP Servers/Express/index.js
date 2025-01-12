const express = require('express')   
const app = express()

app.get('/', function (req, res) {     
  res.send('Hello World')
  // res.send('Hello World')        
})

app.get('/asd', function (req, res) {   
  res.send('Heyyy from asd endpoint')
})

app.post('/asd', function (req, res) {   
  res.send('Hii from asd_post endpoint')
})

app.listen(3000)                        