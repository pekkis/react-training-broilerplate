import React from 'react';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import HTMLDocument from 'react-html-document';
import routes from './routes';
import manifest from '../dist/manifest.json';

const ServerRoot = props => {

  const { store, renderProps, title, css } = props;

  return (
    <HTMLDocument
      title={title}
      scripts={['/' + manifest['main.js']]}
      stylesheets={css.concat(['/' + manifest['main.css']])}
      metatags={[
        { name: 'charset', content: 'utf-8' }
      ]}
      universalState={store.getState()}
    >
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    </HTMLDocument>
  );
};

export default ServerRoot;
