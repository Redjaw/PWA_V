const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

app.get('/', (req, res) => {
var db = require('./db-mock.json')
  res.send(db)
})

app.get('/games', (req, res) => {
var db = require('./db-mock.json')
  res.send(db.games)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})