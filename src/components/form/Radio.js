import React from 'react';

const Radio = props => {
  const { styles, label, validationState, ...rest } = props;
  return (
    <div className={styles.root}>
      <input validationState={validationState} type="radio" {...rest} /> {label}
    </div>
  );
};

Radio.propTypes = {
  label: React.PropTypes.element.isRequired,
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
  styles: React.PropTypes.object.isRequired,
};

Radio.defaultProps = {
  validationState: 'default',
  styles: {},
};

export default Radio;
