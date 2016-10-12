import React from 'react';
import styles from './Select.pcss';

const Select = props => {
  const { children, ...rest } = props;
  return (
    <select className={styles.root} {...rest}>
      {children}
    </select>
  );
};

Select.propTypes = {
  children: React.PropTypes.element,
};

export default Select;
