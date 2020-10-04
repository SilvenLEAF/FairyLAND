import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LogInForm from '../components/auth.js/LogInForm';




import Home from '../components/home/Home'



function Wrapper() {
  return (
    <div id="myWrapper">
      <Switch>


      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogInForm} />




    </Switch>
  </div>
  )
}

export default Wrapper
