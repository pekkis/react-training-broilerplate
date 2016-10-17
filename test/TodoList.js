import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { List } from 'immutable';
import TodoList from '../src/components/TodoList';
import Todo from '../src/components/Todo';
import uuid from 'node-uuid';

const todos = List.of(
  {
    id: uuid.v4(),
    text: 'Blaa bluu',
    done: false,
  },
  {
    id: uuid.v4(),
    text: 'Blaa bluu',
    done: false,
  },
  {
    id: uuid.v4(),
    text: 'Blaa bluu',
    done: false,
  }
);

describe('<TodoList />', () => {

  it('renders todos', () => {
    const wrapper = shallow(
      <TodoList onToggle={() => {}} onRemove={() => {}} todos={todos}/>
    );
    expect(wrapper.find(Todo)).to.have.length(3);
  });

});
