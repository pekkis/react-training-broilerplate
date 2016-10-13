import uuid from 'node-uuid';
import bodyParser from 'body-parser';
import { List } from 'immutable';
import { createServer } from './broilerplate-util/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';

createServer(config, webpackConfig, (app) => {
  app.use(bodyParser.json());

  let users = List.of(
    {
      id: uuid.v4(),
      firstname: 'Gaylord',
      lastname: 'Lohiposki',
      nick: 'gaylord',
    }
  );

  const gaylord = users.first();

  let lists = List.of(
    {
      id: uuid.v4(),
      name: 'Top Secret List (FOR GAYLORD\'S EYES ONLY!1!)',
      user: gaylord.id,
    },
  );

  const secretList = lists.first();

  let todos = List.of(
    {
      id: uuid.v4(),
      text: 'Get 100 litres of battery acid',
      list: secretList.id,
    },
    {
      id: uuid.v4(),
      text: 'Get gardening tools',
      list: secretList.id,
    },
    {
      id: uuid.v4(),
      text: 'Carve up the "meat"',
      list: secretList.id,
    },
    {
      id: uuid.v4(),
      text: 'Liquidate the pieces',
      list: secretList.id,
    },
    {
      id: uuid.v4(),
      text: 'Dump the acid in the Danube',
      list: secretList.id,
    }
  );

  app.get('/api/todo', (req, res) => {
    setTimeout(
      () => res.send(todos.toJS()),
      Math.random() * 1000
    );
  });

  app.post('/api/todo', (req, res) => {
    todos = List(req.body);
    res.send(['ok']);
  });

  app.get('/api/user', (req, res) => {
    res.send(users.toJS());
  });

  app.post('/api/user', (req, res) => {
    users = List(req.body);
    res.send(['ok']);
  });

  app.get('/api/list', (req, res) => {
    res.send(lists.toJS());
  });

  app.post('/api/list', (req, res) => {
    lists = List(req.body);
    res.send(['ok']);
  });

  return Promise.resolve();
});
