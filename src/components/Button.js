// @flow

import React from 'react';
import styles from './Button.pcss';
import classnames from 'classnames';

type Props = {
  block?: boolean,
  children?: React.Element<any>,
};

const Button = (props: Props): React.Element<any> => {
  const { block, children, ...rest } = props;

  const classes = classnames(
    styles.root,
    {
      [styles.block]: block,
    }
  );

  return (
    <button className={classes} {...rest}>{children}</button>
  );
}

Button.defaultProps = {
  block: false,
};

export default Button;
