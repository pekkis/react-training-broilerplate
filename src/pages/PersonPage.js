import React from 'react';
import Inspector from 'react-inspector';
import Gravatar from 'react-gravatar';
import { wrapDisplayName } from 'recompose';

const needsPerson = BaseComponent => {
  const Component = (props) => {
    const { person } = props;
    if (!person) {
      return (<span>loading</span>);
    };
    return <BaseComponent {...props} />
  };

  Component.displayName = wrapDisplayName(
    BaseComponent,
    'NeedsPerson'
  );

  return Component;
};


const PersonPage = props => {

  const { person } = props;

  return (
    <div>

      <h2>{person.firstName} {person.lastName}</h2>

      <Gravatar email={person.email} />

    </div>
  );
};

export default needsPerson(PersonPage);
