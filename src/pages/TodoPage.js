// @flow

import React from 'react';

type Props = {
  todo: ?TodoType,
};

const TodoPage = (props: Props): React.Element<any> => {
  const { todo } = props;
  if (!todo) {
    return (
      <div>Not found</div>
    );
  }

  return (
    <div>
      <h2>{todo.text}</h2>
    </div>
  );
};

TodoPage.propTypes = {
  todo: React.PropTypes.object,
};

export default TodoPage;
