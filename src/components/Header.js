import React from 'react';
import logo from '../images/trollo.png';
import styles from './Header.pcss';
import { Button } from './form';

type Props = {
  isChanged: boolean,
  saveTodos: Function,
  todos: List<TodoType>,
};

const Header = (props: Props) => {
  const { isChanged, todos, saveTodos } = props;
  return (
    <header className={styles.root}>
      <div>
        <h1>
          <img alt="Trollo" src={logo} /> Trollo
        </h1>
      </div>
      <div>
        <Button disabled={!isChanged} onClick={saveTodos.bind(null, todos)}>Save</Button>
      </div>
    </header>
  );
};

export default Header;
