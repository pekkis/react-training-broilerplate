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

export default Example;
