import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning Javascript" },
    { text: "Learning Ionic" },
    { text: "Learning Raect" }
  ]);

  const addTodo = (value) => {
    // [...todos] = Membuat array baru yang ada di state todos
    const addedtodo = [...todos, { text: value }];

    setTodos(addedtodo);
  };

  return (
    <Paper>
      <Header />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
