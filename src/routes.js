import React from 'React';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import IndexPage from './pages/container/IndexPageContainer';
import PersonPage from './pages/container/PersonPageContainer';

export default [
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route
      path="person/:id"
      component={PersonPage}
    />
  </Route>,
];
