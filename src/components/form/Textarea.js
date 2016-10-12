import React from 'react';
import cx from 'classnames';
import styles from './Textarea.pcss';

const Textarea = props => {
  const { validationState, block, ...rest } = props;

  const classes = cx(
    styles.root,
    styles[validationState],
    [styles.block]: block,
  );

  return (
    <textarea className={classes} {...rest} />
  );
};

Textarea.propTypes = {
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
  block: React.PropTypes.bool,
};

export default Textarea;
