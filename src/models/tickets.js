const connection = require('../configs/db')

const tickets = {
  // SELECT * FROM `tickets`
  // untuk menampilkan semua data
  getTickets: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM tickets', (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },
  // untuk menampilkan data by id
  // SELECT * FROM `tickets` WHERE id=1
  getTicketsById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM tickets WHERE id= ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // untuk menambahkan data
  insertTickets: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO tickets SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  // menghapus data by id
  deleteTickets: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM tickets WHERE id = ?', id, (err, results) => {
        if (!err) {
          resolve(results)
        } else {
          reject(err)
        }
      })
    })
  },

  // update data
  updateTickets: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE tickets SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = tickets
