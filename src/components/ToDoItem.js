import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
// import { toggleComplete, deleteTodo } from "../redux/toDoSlice";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/toDoSlice";

const ToDoItem = ({ id, title, completed }) => {

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    // dispatch function that bypasses the thunk 
    // dispatch(
    //   toggleComplete({
    //     id: id,
    //     completed: !completed
    //   })
    // )

    // dispatch function through the thunk 
    dispatch(
      toggleCompleteAsync({
        id: id,
        completed: !completed
      })
    )
  };

  const handleDeleteClick = () => {
    // dispatch(
    //   deleteTodo({
    //     id: id,
    //   })
    // )
    dispatch(
      deleteTodoAsync({
        id: id,
      })
    )
  };

  return (

    <li className={`list-group-item ${completed && `list-group-item-success`}`}>

      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check 
              type="checkbox" 
              checked={completed} 
              onClick={handleCompleteClick}
              label={title} />
          </Form.Group>
        </span>
        <Button 
          variant="danger" 
          type="submit"
          onClick={handleDeleteClick} >

          Delete
          
        </Button>
      </div>

    </li>

  );

};

export default ToDoItem;