// @flow

import React from 'react';
import styles from './App.pcss';
import Header from './container/HeaderContainer';

type Props = {
  children: React.Element<any>,
};

const App = ({ children }: Props): React.Element<any> => (
  <div className={styles.root}>
    <Header />

    <div className={styles.content}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
