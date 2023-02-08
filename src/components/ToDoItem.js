import React from "react";
import { Form, Button } from 'react-bootstrap/Form';

const ToDoItem = ({ id, title, completed }) => {

  return (

    <li className={`list-group-item ${completed && `list-group-item-success`}`}>

      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <Form.Group className="mb-3 mr-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" checked={completed} />
          </Form.Group>
          {title}
        </span>
        <Button variant="danger" type="submit">
          Delete
        </Button>
      </div>

    </li>

  );

};

export default ToDoItem;