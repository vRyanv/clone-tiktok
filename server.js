const express = require('express')
const app = express()
const port = 3000

app.use(express.static('client/build'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
