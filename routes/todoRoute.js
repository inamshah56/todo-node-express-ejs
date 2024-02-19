const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.get('/', todoController.getAllTodos)
router.post('/add', todoController.addTodo)
router.post('/mark/:id', todoController.markTodo)
router.post('/delete/:id', todoController.deleteTodo)

module.exports = router