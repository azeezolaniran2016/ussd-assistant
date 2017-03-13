import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PrivacyPage from './components/privacy/PrivacyPage';
import AboutPage from './components/about/AboutPage';
import PageNotFound from './components/404/PageNotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="privacy" component={PrivacyPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
