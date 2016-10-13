import React from 'react';

function decideType({ type }) {
  if (typeof type === 'string') {
    return type;
  } else if (typeof type === 'function') {
    return type.name;
  }
  throw new Error('Unknown element type');
}

const acceptedTypes = [
  'Radio',
  'Input',
  'Label',
  'Select',
  'Checkbox',
  'Textarea',
];

const InputGroup = props => {
  const { styles, children, validationState, ...rest } = props;

  const clones = React.Children.map(children, child => (
    acceptedTypes.includes(decideType(child)) ?
      React.cloneElement(child, { validationState }) : child
  ));

  return (
    <div className={styles.root} {...rest}>
      {clones}
    </div>
  );
};

InputGroup.propTypes = {
  children: React.PropTypes.node,
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
  styles: React.PropTypes.object.isRequired,
};

InputGroup.defaultProps = {
  validationState: 'default',
  styles: {},
};

export default InputGroup;
