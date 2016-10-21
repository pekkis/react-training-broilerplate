// @flow

import React from 'react';
import styles from './App.pcss';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <h1>
          <img src={require('../assets/trollo.png')} />
          Loistava appsi
        </h1>
        {children}
      </div>
    );
  }
}

export default App;
