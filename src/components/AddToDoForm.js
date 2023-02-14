import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/toDoSlice";

const AddToDoForm = () => {

  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    
    dispatch(
      addTodo({
        title: value,
      })
    );
    
    console.log("Client entered: " + value);

  };

  return (
    <Form onSubmit={onSubmit} className='mt-4 mb-4'>

      <Row>
        
        <Col xs={10}>
          <Form.Group className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Add your todo..." 
              className="form-control mb-2 mr-sm-2"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <Form.Text className="text-muted">
              Spare your mind some trouble and add it to the list!
            </Form.Text>
          </Form.Group>
        </Col>

        <Col>
          <Button variant="btn btn-primary" type="submit">
            Submit
          </Button>
        </Col>
        
      </Row>

    </Form>
  );

};

export default AddToDoForm;

