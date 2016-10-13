import React from 'react';

const Form = props => {
  const { styles, children, ...rest } = props;
  return (
    <form className={styles.root} {...rest}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: React.PropTypes.node,
  styles: React.PropTypes.object.isRequired,
};

Form.defaultProps = {
  styles: {},
}

export default Form;
