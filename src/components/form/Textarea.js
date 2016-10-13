import React from 'react';
import cx from 'classnames';

const Textarea = props => {
  const { styles, validationState, block, ...rest } = props;

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
  styles: React.PropTypes.object.isRequired,
};

Textarea.defaultProps = {
  block: false,
  styles: {},
}

export default Textarea;
