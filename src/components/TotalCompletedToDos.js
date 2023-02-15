import React from "react";
import { useSelector } from "react-redux";

const TotalCompletedToDos = () => {

  const completedTodos = useSelector((state) => state.todos.filter(
    (todo) => todo.completed === true
  ));

  return (
    <h5 className="mt-4">
      Total Completed ToDos: 2
    </h5>
  )
};

export default TotalCompletedToDos;