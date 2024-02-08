const express = require("express");
const router = express.Router();
const todoCtrl = require("../controller/todoCtrl");

// Create a todo
router.post("/", todoCtrl.createTodo);

// Update a todo
router.patch("/updateTodo/:id", todoCtrl.updateTodo);

// Delete a todo
router.delete("/deleteTodo/:id", todoCtrl.deleteTodo);

// Get a single todo
router.get("/find/:id", todoCtrl.getTodoById);

// Get all todos
router.get("/", todoCtrl.getAllTodos);

module.exports = router;
