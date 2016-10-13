import React from 'react';

const Select = props => {
  const { styles, children, ...rest } = props;
  return (
    <select className={styles.root} {...rest}>
      {children}
    </select>
  );
};

Select.propTypes = {
  children: React.PropTypes.node,
  styles: React.PropTypes.object.isRequired,
};

Select.defaultProps = {
  styles: {},
}

export default Select;
