const ticketsModels = require('../models/tickets')

exports.getTickets = (req, res) => {
    ticketsModels.getTickets()
        .then((result) => {
            res.json({
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

exports.updateTickets = (req, res) => {
    const idMovies = req.params.id
    const {
        movieName,
        category,
        count,
        seats,
        price
    } = req.body

    const data = {
        movieName,
        dateTime: new Date(),
        category,
        count,
        seats,
        price
    }
    ticketsModels.updateTickets(idMovies, data)
        .then((result) => {
            res.json({
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
        })

}

exports.insertTickets = (req, res) => {
    const {
        movieName,
        category,
        count,
        seats,
        price
    } = req.body

    const data = {
        movieName,
        dateTime: new Date(),
        category,
        count,
        seats,
        price
    }
    ticketsModels.insertTickets(data)
        .then((result) => {
            res.json({
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

exports.deleteTickets = (req, res) => {
    const idMovies = req.params.id
    ticketsModels.deleteTickets(idMovies)
        .then((result) => {
            res.json({
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

exports.getTicketsById = (req, res) => {
    const idMovies = req.params.id
    ticketsModels.getTicketsById(idMovies)
        .then((result) => {
            res.json({
                data: result
            })
        })
}