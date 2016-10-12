import React from 'react';
import styles from './Radio.pcss';

const Radio = props => {
  const { label, validationState, ...rest } = props;
  return (
    <div className={styles.root}>
      <input validationState={validationState} type="radio" {...rest} /> {label}
    </div>
  );
};

Radio.propTypes = {
  label: React.PropTypes.element.isRequired,
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
};

Radio.defaultProps = {
  validationState: 'default',
};

export default Radio;
