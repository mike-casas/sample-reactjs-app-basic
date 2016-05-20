import React from 'react'
import ReactDom from 'react-dom'
import { Router, hashHistory } from 'react-router'
import Routes from './config/routes'

ReactDom.render(
  <Router history={hashHistory} routes={Routes} />,
  document.getElementById('app')
);
