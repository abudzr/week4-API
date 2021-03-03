const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const ticketsRouter = require('./src/routers/tickets')

app.use(bodyParser.json())


// router
app.use('/tickets', ticketsRouter)



app.listen(port, () => {
    console.log('server is running port ' + port);
})