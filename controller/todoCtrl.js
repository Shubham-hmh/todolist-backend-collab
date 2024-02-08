const Todo = require("../model/Todo");

const asyncHandler = require("express-async-handler");

const createTodo = asyncHandler(async (req, res) => {
    const newTodo = new Todo(req.body);

    try {
        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
    } catch (err) {
        res.status(500).json(err);
    }
});

const updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json(error);
    }
});

const deleteTodo = asyncHandler(async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("Todo has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

const getTodoById = asyncHandler(async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json(err);
    }
});

const getAllTodos = asyncHandler(async (req, res) => {
    try {
        const todoList = await Todo.find();
        res.status(200).json(todoList);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoById,
    getAllTodos
};
