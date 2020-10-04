import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LogInForm from '../components/auth.js/LogInForm';
import SignUpForm from '../components/auth.js/SignUpForm';




import Home from '../components/home/Home'
import Profile from '../components/profile/Profile';



function Wrapper() {
  return (
    <div id="myWrapper">
      <Switch>


      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogInForm} />
      <Route path="/signup" component={SignUpForm} />

      <Route path="/profile" component={Profile} />




    </Switch>
  </div>
  )
}

export default Wrapper
