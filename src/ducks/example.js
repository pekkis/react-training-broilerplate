import { Map } from 'immutable';

export function setExample(value) {
  return {
    type: 'EXAMPLE_SET',
    payload: value,
  };
}

const defaultState = Map({
  example: 'default-example',
})

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'EXAMPLE_SET':
      return state.set('example', payload);

    default:
      return state;
  }
}
