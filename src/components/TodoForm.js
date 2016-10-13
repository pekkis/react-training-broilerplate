// @flow

import React from 'react';
import uuid from 'node-uuid';
import { Form, Button, InputGroup, Input, Label } from './form';
import styles from './TodoForm.pcss';

export default class TodoForm extends React.Component {

  onSubmit(e: Event) {
    const { list } = this.props;

    e.preventDefault();

    const newTodo: TodoType = {
      id: uuid.v4(),
      text: this.input.value,
      done: false,
      list: list.id,
    };

    this.input.value = '';
    this.props.onAdd(newTodo);
  }

  input: HTMLInputElement;

  render() {
    return (
      <div className={styles.root}>
        <Form onSubmit={this.onSubmit.bind(this)}>

            <Label htmlFor="text">Got something new to do?</Label>
            <Input
              name="text"
              reference={(input) => { this.input = input }}
              type="text"
              placeholder="What must be done?"
            />

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
  list: React.PropTypes.object.isRequired,
};
