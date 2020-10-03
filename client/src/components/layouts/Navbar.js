import M from 'materialize-css'
// import './../../styles/Navbar.scss'

import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SignedInMobileLinks, SignedInPCLinks } from './navLinks/SignedInLinks';
import { SignedOutMobileLinks, SignedOutPCLinks } from './navLinks/SignedOutLinks';



function Navbar() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  const isLoggedIn = false

  const mobileLink = isLoggedIn ? <SignedInMobileLinks/> : <SignedOutMobileLinks/>;
  const pcLink = 5 ? <SignedInPCLinks/> : <SignedOutPCLinks/>;





  return (
    <nav id="myNavbar" className="nav nav-wrapper scrollspy">
      <div className="container">

        <Link to= "/" className= "brand-logo">SilvenLEAF</Link>
        <div className="sidenav-trigger hide-on-large-only" data-target= "mobilenav" id="myHam">
            <div></div>   
            <div></div>
            <div></div>
        </div>




        <ul className="sidenav" id="mobilenav">
          { mobileLink }            
        </ul>



        

        <ul className="right hide-on-med-and-down">
          { pcLink }

          <li style={{marginLeft: '20px'}}>
            {
              /*userData._id */ 5 && (
              <Link to="/profile" className="btn-floating center pulse myProfileNavIcon">
                ZG
                { /*userData.userName[0]*/ }
              </Link>
              )
            }
          </li>
        </ul>
        




        <ul className="right hide-on-large-only">
          <li>
            {
              /*userData._id */ isLoggedIn && (
                <Link to="/profile" className="btn-floating center pulse myProfileNavIcon">
                  ZG
                  { /*userData.userName[0] */ }
                </Link>
                )
              }
          </li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar
