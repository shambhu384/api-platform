import React from 'react';
import {Route} from 'react-router-dom';
import {List,Create, Update, Show} from '../components/greeting/';

export default [
  <Route path='/greetings/create' component={Create} exact={true} key='create'/>,
  <Route path='/greetings/edit/:id' component={Update} exact={true} key='update'/>,
  <Route path='/greetings/show/:id' component={Show} exact={true} key='show'/>,
  <Route path='/greetings/:page?' component={List} strict={true} key='list'/>,
];
