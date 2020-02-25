const express = require('express')
const route = express.Router()
const Task = require('../controllers/task')

// INDEX
route.get('/', Task.index)

// SHOW
route.get('/:id', Task.show)

// POST
route.post('/', Task.register)

// UPDATE
route.put('/:id', Task.update)

// DELETE
route.delete('/:id', Task.destroy)

module.exports = route
