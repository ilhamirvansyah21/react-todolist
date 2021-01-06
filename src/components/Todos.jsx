import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar Vue!"
    },
    {
      text: "Belajar JS!"
    },
    {
      text: "Belajar Vue!"
    },
    {
      text: "Belajar Vue!"
    },
    {
      text: "Belajar Vue!"
    },
    {
      text: "Belajar Vue!"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
