import React from 'react'
import Main from '../components/main.jsx'
import Home from '../components/home.jsx'
import Profile from '../components/profile.jsx'
import { Route,IndexRoute} from 'react-router'

export default(
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="profile/:username" component={Profile} />
  </Route>
);
