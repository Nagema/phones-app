const express = require('express')
const app = express()
const port = 3001
const fs = require('fs')

const phones = JSON.parse(fs.readFileSync('phones.json'))

app.get('/phones', (req, res) => {
  res.json(phones)
})

app.listen(port, () => {
  console.log(`rest server listening on port ${port}`)
})

app.use(express.static('build'));