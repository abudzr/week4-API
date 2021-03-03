const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets')





router
    .get('/', ticketsController.getTickets)
    .get('/:id', ticketsController.getTicketsById)
    .post('/', ticketsController.insertTickets)
    .put('/:id', ticketsController.updateTickets)
    .delete('/:id', ticketsController.deleteTickets)

module.exports = router