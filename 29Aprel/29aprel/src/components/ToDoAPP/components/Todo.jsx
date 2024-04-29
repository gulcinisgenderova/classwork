import React, { useEffect } from "react";

const Todo = ({ todo, todos, setTodos }) => {
  useEffect(() => {
    return () => {

    };
  }, []);

  return (
    <li>
      {todo.todo} -{" "}

    </li>
  );
};

export default Todo;
