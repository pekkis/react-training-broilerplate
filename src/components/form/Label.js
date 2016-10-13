import React from 'react';
import cx from 'classnames';

const Label = props => {
  const { styles, children, validationState, htmlFor, ...rest } = props;

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
  children: React.PropTypes.node.isRequired,
  validationState: React.PropTypes.oneOf(['success', 'error', 'default']),
  styles: React.PropTypes.object.isRequired,
};

Label.defaultProps = {
  validationState: 'default',
  styles: {},
};

export default Label;
