import React from 'react';

const Example = props => {
  const { example, setExample } = props;
  return (
    <div>
      <p>
        Example: {example}
      </p>

      <button onClick={e => setExample('jotain aivan muuta!')}>kliksuta</button>

    </div>
  );
};

Example.propTypes = {
  example: React.PropTypes.string.isRequired,
  setExample: React.PropTypes.func.isRequired,
};

Example.defaultProps = {
  example: 'default example',
};

export default Example;
