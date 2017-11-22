import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LoginPage from './components/auth/LoginPage';
import Layout from './components/common/Layout';
import HomePage from './components/home/HomePage';
import ChecklistPage from './components/checklist/ChecklistPage';
import ResultsU from './components/results/ResultsU';
import ResultsNU from './components/results/ResultsNU';
import AdditionalPage from './components/additional/AdditionalPage';
import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/checklist" component={ChecklistPage}/>
      <Route path="/resultsU" component={ResultsU}/>
      <Route path="/resultsNU" component={ResultsNU}/>
      <Route path="/additional" component={AdditionalPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
