import React from 'react';
import styles from './Checkbox.pcss';

const Checkbox = props => {
  const { label, validationState, ...rest } = props;
  return (
    <div className={styles.root}>
      <input validationState={validationState} type="checkbox" {...rest} /> {label}
    </div>
  );
};

Checkbox.propTypes = {
  label: React.PropTypes.element.isRequired,
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
};

Checkbox.defaultProps = {
  validationState: 'default',
};

export default Checkbox;
