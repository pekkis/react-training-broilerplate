import React from 'react';
import styles from './Form.pcss';

const Form = props => {
  const { children, ...rest } = props;
  return (
    <form className={styles.root} {...rest}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: React.PropTypes.element,
};

export default Form;
