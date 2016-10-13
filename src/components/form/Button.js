// @flow

import React from 'react';
import cx from 'classnames';

type Props = {
  children: React.Element<any>,
  role: 'primary' | 'success' | 'danger',
  block: boolean,
  inline: boolean,
  outline: boolean,
  styles: Object,
};

const Button = (props: Props): React.Element<any> => {
  const { styles, children, block, inline, role, outline, ...rest } = props;

  const classes = cx(
    styles.button,
    styles[role],
    {
      [styles.block]: block,
      [styles.inline]: inline,
      [styles.outline]: outline,
    }
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  block: false,
  inline: false,
  outline: false,
  role: 'primary',
  type: 'button',
  styles: {}
};

Button.propTypes = {
  block: React.PropTypes.bool.isRequired,
  inline: React.PropTypes.bool.isRequired,
  outline: React.PropTypes.bool.isRequired,
  role: React.PropTypes.oneOf(['primary', 'success', 'danger']),
  styles: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
}

export default Button;
