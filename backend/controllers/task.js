const Task = require('../models/Task')

// @route GET /tasks
// @desc Returns all tasks
// @access Public
exports.index = async function (req, res) {
  const tasks = await Task.find({})
  res.status(200).json(tasks)
}

// @route GET /tasks/{id}
// @desc Returns a specific task
// @access Public
exports.show = async function (req, res) {
  try {
    const id = req.params.id

    const task = await Task.findById(id)

    if (!task) return res.status(401).json({ message: 'Task does not exist || done & delete' })

    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @route PUT /tasks/{id}
// @desc Update task details
// @access Public
exports.update = async function (req, res) {
  try {
    const { title, status } = req.body
    const id = req.params.id

    const task = await Task.findByIdAndUpdate(id, { $set: { title, status } }, { new: true })

    if (!task) return res.status(401).json({ message: 'Task does not exist || done & delete' })

    res.status(200).json({ task, message: 'Task has been updated' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @route DESTROY /tasks/{id}
// @desc Delete Task
// @access Public
exports.destroy = async function (req, res) {
  try {
    const id = req.params.id

    await Task.findByIdAndDelete(id)
    res.status(200).json({ message: 'Task has been deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @route POST /tasks
// @desc Add new task
// @access Public
exports.register = async (req, res) => {
  try {
    console.log(req.body)
    const newTask = new Task({ ...req.body, role: 'basic' })

    await newTask.save()
    res.status(200).json({ message: 'Task has been added' })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
