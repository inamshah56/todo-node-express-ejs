const Todo = require('../models/todoModel');

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.render('index', { todos });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internel Server Error');
    }
};

exports.addTodo = async (req, res) => {
    const { title } = req.body;
    try {
        await Todo.create({ title });
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Internel Server Error');
    }
};

exports.markTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByPk(id);
        todo.completed = true;
        await todo.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Internel Server Error');
    }
};

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByPk(id);
        todo.completed = true;
        await todo.destroy();
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Internel Server Error');
    }
};
