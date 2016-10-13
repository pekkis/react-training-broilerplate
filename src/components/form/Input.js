import React from 'react';
import cx from 'classnames';

const Input = props => {
  const { styles, block, validationState, reference, ...rest } = props;
  const classes = cx(
    styles.input,
    styles[validationState],
    {
      [styles.block]: block,
    }
  );

  return (
    <input ref={reference} className={classes} {...rest} />
  );
};

Input.propTypes = {
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
  block: React.PropTypes.bool,
  reference: React.PropTypes.func,
};

Input.defaultProps = {
  block: false,
  validationState: 'default',
  styles: {},
};

export default Input;
