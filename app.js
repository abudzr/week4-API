require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT
const bodyParser = require('body-parser')
const ticketsRouter = require('./src/routers/tickets')

app.use(bodyParser.json())
app.use(cors())

// router
app.use('/tickets', ticketsRouter)

app.listen(port, () => {
  console.log('server is running port ' + port)
})
