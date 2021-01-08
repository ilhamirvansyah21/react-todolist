import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning Javascript", isCompleted: false },
    { text: "Learning Ionic", isCompleted: false },
    { text: "Learning Raect", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    // [...todos] = Membuat array baru yang ada di state todos
    const addedTodo = [...todos, { text: value, isCompleted: false }];

    setTodos(addedTodo);
  };
  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
