import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LogInForm from '../components/auth.js/LogInForm';
import SignUpForm from '../components/auth.js/SignUpForm';




import Home from '../components/home/Home'



function Wrapper() {
  return (
    <div id="myWrapper">
      <Switch>


      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogInForm} />
      <Route path="/signup" component={SignUpForm} />




    </Switch>
  </div>
  )
}

export default Wrapper
