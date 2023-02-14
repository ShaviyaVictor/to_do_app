import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/toDoSlice";

const ToDoItem = ({ id, title, completed }) => {

  const dispatch = useDispatch();

  return (

    <li className={`list-group-item ${completed && `list-group-item-success`}`}>

      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" checked={completed} label={title} />
          </Form.Group>
        </span>
        <Button variant="danger" type="submit">
          Delete
        </Button>
      </div>

    </li>

  );

};

export default ToDoItem;