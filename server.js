const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const fs = require('fs')

app.use(express.json())

app.get('/phones', (req, res) => {
  const phones = JSON.parse(fs.readFileSync('phones.json'))
  res.json(phones)
})

app.post('/phones', (req, res) => {
  const phones = JSON.parse(fs.readFileSync('phones.json'))
  const phoneIds = phones.map(phone => phone.id)
  const maxId = Math.max(...phoneIds)
  const newPhone = {
    id: maxId + 1,
    ...req.body 
  }
  const newPhones = [...phones, newPhone]
  fs.writeFileSync('phones.json', JSON.stringify(newPhones))

  res.json(newPhone)

})

app.listen(port, () => {
  console.log(`rest server listening on port ${port}`)
})

app.use(express.static('build'));