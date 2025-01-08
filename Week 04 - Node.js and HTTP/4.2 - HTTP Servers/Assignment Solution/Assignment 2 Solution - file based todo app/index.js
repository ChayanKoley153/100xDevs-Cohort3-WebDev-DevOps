/*
Assignment #2 - Trying to code a filesystem based todo app and store data into the file
*/

const express = require("express");

const fs = require("fs");

const path = require("path");

const app = express();

app.use(express.json());

const todosFilePath = path.join(__dirname, "todos-data.json");

const readTodosFromFile = () => {
  try {
    const data = fs.readFileSync(todosFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeTodosToFile = (data) => {
  fs.writeFileSync(todosFilePath, JSON.stringify(data, null, 2), "utf-8");
};

/**
 * create a route handler for POST request
 *
 * Create a new todo object and add it to the todos array
 *
 * URL: localhost:3000/todos/create
 * Example: localhost:3000/todos/create
 */
app.post("/todos/create", (req, res) => {
  const { todo } = req.body;

  const id = parseInt(req.body.id);

  if (!id) {
    return res.send("Id cannot be empty");
  }

  let todos = readTodosFromFile();

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      return res.send("Todo already exists with id " + id);
    }
  }

  if (!todo || todo.trim() === "") {
    return res.send("Todo cannot be empty");
  }

  const newTodo = {
    title: todo,
    id: id,
  };

  todos.push(newTodo);

  writeTodosToFile(todos);

  res.send("Todo added successfully");
});

/**
 * create a route handler for DELETE request
 *
 * Delete all the todos from the array
 *
 * URL: localhost:3000/todos/delete/all
 * Example: localhost:3000/todos/delete/all
 */
app.delete("/todos/delete/all", (req, res) => {
  writeTodosToFile([]);

  res.send("All todos deleted successfully");
});

/**
 * create a route handler for DELETE request
 *
 * Delete the todos with the given id from the array
 *
 * URL: localhost:3000/todo/delete/:id
 * Example: localhost:3000/todo/delete/1
 */
app.delete("/todos/delete/:id", function (req, res) {
  const todoId = parseInt(req.params.id);

  let todos = readTodosFromFile();

  let deleted = false;

  const tempTodos = [];

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === todoId) {
      deleted = true;
      continue;
    }

    tempTodos.push(todos[i]);
  }

  if (!deleted) {
    return res.send("Todo not found with id " + todoId);
  }

  writeTodosToFile(tempTodos);

  res.send("Todo deleted successfully with id " + todoId);
});

/**
 * create a route handler for PUT (Update) request
 *
 * Update the todos with the given id in the array
 *
 * URL: localhost:3000/todo/update/:id
 * Example: localhost:3000/todo/update/1
 */
app.put("/todos/update/:id", function (req, res) {
  const { todo } = req.body;

  const todoId = parseInt(req.params.id);

  if (!todo || todo.trim() === "") {
    return res.send("Todo cannot be empty");
  }

  let todos = readTodosFromFile();

  let updated = false;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === todoId) {
      todos[i].title = todo;
      updated = true;
    }
  }

  if (!updated) {
    return res.send("Todo not found with id " + todoId);
  }

  writeTodosToFile(todos);

  res.send("Todo updated successfully with id " + todoId);
});

/**
 * create a route handler for GET (Read) request
 *
 * Read all the todos from the array
 *
 * URL: localhost:3000/todo/read/all
 * Example: localhost:3000/todo/read/all
 */
app.get("/todos/read/all", function (req, res) {
  let todos = readTodosFromFile();

  if (todos.length === 0) {
    return res.send("No todos found");
  }

  res.send(todos);
});


/**
 * create a route handler for GET (Read) request
 *
 * Read the todos with the given id from the array
 *
 * URL: localhost:3000/todos/read/:id
 * Example: localhost:3000/todos/read/1
 */
app.get("/todos/read/:id", function (req, res) {
  const todoId = parseInt(req.params.id);

  let todos = readTodosFromFile();

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return res.send("Todo not found with id " + todoId);
  }

  res.send(todo);
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
