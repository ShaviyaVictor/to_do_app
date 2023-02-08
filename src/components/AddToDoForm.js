import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const AddToDoForm = () => {

  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Client entered: " + value);
  };

  return (
    <Form onSubmit={onSubmit} className='form-inline mt-4 mb-4'>

      <Row>
        <Col xs={10}>
          <Form.Group className="mb-3">
            {/* <Form.Label className="sr-only">
              Title:
            </Form.Label> */}
            <Form.Control 
              type="text" 
              placeholder="Add your todo..." 
              className="form-control mb-2 mr-sm-2"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <Form.Text className="text-muted">
              Spare your mind some trouble.
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

