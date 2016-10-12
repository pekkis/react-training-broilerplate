// @flow

import React from 'react';
import cx from 'classnames';
import styles from './Button.pcss';

type Props = {
  children: React.Element<any>,
  role: 'primary' | 'success' | 'danger',
  block: boolean,
  inline: boolean,
  outline: boolean,
};

const Button = (props: Props): React.Element<any> => {
  const { children, block, inline, role, outline, ...rest } = props;

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
};

export default Button;
