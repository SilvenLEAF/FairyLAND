import M from 'materialize-css'
import '../../styles/AuthForm.scss'


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function LogInForm() {
  useEffect(()=>{
    M.AutoInit();
  })



  return (
    <div className="container myAuthForm" >
      <div className="myAuthAppName">SilvenLEAF</div>
      <div className="myAuthTitle">Log in to your account</div>


      <form>
        <div className="input-field">
          <i className="prefix fa fa-envelope"></i>
          <input type="email" required />
          <label htmlFor="email">Email <span className="red-text">(*required)</span></label>
        </div>

        


        <div className="input-field">
        <i className="prefix material-icons">memory</i>
          <input type="password" required autoComplete="off" />
          <label htmlFor="password">Password <span className="red-text">(*required) </span> </label>
        </div>


        

        
        <div className="input-field right-align">
          <button className="btn waves-effect waves-light">
            Log in
          </button>          
        </div>



        <div className="myOauthDividingOR">OR</div>
        <hr className="myOauthDividingHR"/>

        <div className="myOauthButtonsHolder">
          <div className="myOauthBtn myOauthGoogle">
            <i className="fa fa-google"></i> Log in with Google
          </div>
          
          
          
          
          <div className="myOauthBtn myOauthLinkedin">
            <i className="fa fa-linkedin"></i> Log in with LinkedIN
          </div>
          
          
          
          
          <div className="myOauthBtn myOauthGithub">
            <i className="fa fa-github"></i> Log in with Github
          </div>
          
          
          
          <div className="myOauthBtn myOauthTwitter">
            <i className="fa fa-twitter"></i> Log in with Twitter
          </div>
          
          
          
          <div className="myOauthBtn myOauthInstagram">
            <i className="fa fa-instagram"></i> Log in with Instagram
          </div>


                            
          
          
          <div className="myOauthBtn myOauthFacebook">
            <i className="fa fa-facebook"></i> Log in with Facebook
          </div>
          
          
          
          


        </div>


        <div className="myAuthFormFooter">
          Need an account? <Link to="/signup">Sign up</Link>
        </div>


        
      </form>
    </div>
  )
}

export default LogInForm
