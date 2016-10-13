import React from 'react';

const Checkbox = props => {
  const { styles, label, validationState, ...rest } = props;
  return (
    <div className={styles.root}>
      <input validationState={validationState} type="checkbox" {...rest} /> {label}
    </div>
  );
};

Checkbox.propTypes = {
  label: React.PropTypes.node.isRequired,
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
  styles: React.PropTypes.object.isRequired,
};

Checkbox.defaultProps = {
  validationState: 'default',
  styles: {},
};

export default Checkbox;
