// @flow

import React from 'react';
import uuid from 'node-uuid';
import { Form, Button, InputGroup, Input, Label } from './form';
import styles from './TodoForm.pcss';

type Props = {
  onAdd: Function,
  list: ListType,
};

export default class TodoForm extends React.Component {

  state: {
    newTodo: string,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      newTodo: '',
    };
  }

  onSubmit(e: Event) {
    const { list } = this.props;
    const { newTodo } = this.state;

    e.preventDefault();

    const todo: TodoType = {
      id: uuid.v4(),
      text: newTodo,
      done: false,
      list: list.id,
    };

    this.props.onAdd(todo);
  }

  render() {
    const { newTodo } = this.state;
    return (
      <div className={styles.root}>
        <Form onSubmit={this.onSubmit.bind(this)}>

            <Label htmlFor="text">Got something new to do?</Label>
            <Input
              name="text"
              value={newTodo}
              onChange={e => this.setState({ newTodo: e.target.value })}
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
