// @flow

import React from 'react';
import uuid from 'node-uuid';
import { Form, Button, InputGroup, Input, Label } from './form';
import styles from './TodoForm.pcss';

export default class TodoForm extends React.Component {

  onSubmit(e: Event) {
    e.preventDefault();

    const newTodo: TodoType = {
      id: uuid.v4(),
      text: this.text.value,
      category: 0,
    };
    this.text.value = '';
    this.props.onAdd(newTodo);
  }

  text: HTMLInputElement;

  render() {
    return (
      <div className={styles.root}>
        <Form onSubmit={this.onSubmit.bind(this)}>

          <InputGroup>
            <Label htmlFor="text">Got something new to do?</Label>
            <Input
              name="text"
              ref={text => { this.text = text; }}
              type="text"
              placeholder="What must be done?"
            />
          </InputGroup>

          <InputGroup>
            <Button type="submit">Add</Button>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

TodoForm.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
};
