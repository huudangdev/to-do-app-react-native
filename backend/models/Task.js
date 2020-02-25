const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: 'Title is required',
    trim: true
  },

  status: {
    type: String,
    required: 'Status is required'
  }
})

module.exports = mongoose.model('Tasks', taskSchema)
