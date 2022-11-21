import React, { FormEvent, useRef, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../types";
import { v4 as uuidV4 } from "uuid";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onnAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const NoteForm = ({ onSubmit, onnAddTag, availableTags }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(titleRef.current!.value);
    console.log(markdownRef.current!.value);

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });

    navigate("..");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                isMulti
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                onChange={(tags) =>
                  setSelectedTags(
                    tags.map((t) => ({
                      label: t.label,
                      id: t.value,
                    }))
                  )
                }
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onnAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
                options={availableTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup controlId="markdown">
          <Form.Label>Body</Form.Label>
          <FormControl required as="textarea" rows={15} ref={markdownRef} />
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
