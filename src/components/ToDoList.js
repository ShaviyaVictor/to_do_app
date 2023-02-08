import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {

  const todos = [
    { id: 1, title: 'Todo1', completed: false },
    { id: 2, title: 'Todo2', completed: true },
    { id: 3, title: 'Todo3', completed: false },
    { id: 4, title: 'Todo4', completed: true },
    { id: 5, title: 'Todo5', completed: false },
  ];

  return (

    <ul className="list-group">

      {todos.map((todo) => (
        <ToDoItem id={todo.id} title={todo.title} completed={todo.completed}/>
      ))}

    </ul>

  );

};

export default ToDoList;