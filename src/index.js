import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
import App from './App';
import Prerequisites from './step-0/Prerequisites';
import Introduction from './step-1/Introduction';
import Setup from './step-2/Setup';
import UpAndRunning from './step-3/UpAndRunning';
import Components from './step-4/Components';
import Routing from './step-5/Routing';
import FetchingData from './step-6/FetchingData';
import Styles from './step-7/Styles';
import Finish from './step-8/Finish';
import PageNotFound from './PageNotFound';
import './index.css';
import './App.css';
import './syntax.css';

function scrollToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
console.log('starting up app');
ReactDOM.render(
  <Router history={appHistory} onUpdate={scrollToTop}>
    <Route path="/" component={App}>
      <IndexRoute component={Introduction} />
      <IndexRedirect to="/introduction" />
      <Route path="/prerequisites" component={Prerequisites} />
      <Route path="/introduction" component={Introduction} />
      <Route path="/setup" component={Setup} />
      <Route path="/up-and-running" component={UpAndRunning} />
      <Route path="/components" component={Components} />
      <Route path="/routing" component={Routing} />
      <Route path="/fetching-data" component={FetchingData} />
      <Route path="/styles" component={Styles} />
      <Route path="/finish" component={Finish} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
