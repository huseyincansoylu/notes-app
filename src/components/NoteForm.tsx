import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

const NoteForm = () => {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect isMulti />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup controlId="markdown">
          <Form.Label>Body</Form.Label>
          <FormControl required as="textarea" rows={15} />
        </FormGroup>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
