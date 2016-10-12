import React from 'react';
import cx from 'classnames';
import styles from './Label.pcss';

const Label = props => {
  const { children, validationState, htmlFor, ...rest } = props;

  const classes = cx(
    styles.root,
    styles[validationState]
  );
  return (
    <label htmlFor={htmlFor} className={classes} {...rest}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
};

Label.defaultProps = {
  validationState: 'default',
};

export default Label;
