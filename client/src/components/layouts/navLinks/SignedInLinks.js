import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'










export const SignedInMobileLinks = ({ setUserData }) => {


  const history = useHistory();


  const handleLogout = ()=>{
    setUserData({
      user: undefined,
    });
    history.push('/')
  }



  return (
    <>
      <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-home"></i>Home</NavLink></li>
      <li><NavLink to="/search" className="sidenav-close" ><i className="fa fa-search"></i>Search</NavLink></li>
      <li><NavLink to="/contact" className="sidenav-close" ><i className="fa fa-envelope"></i>Contact Me</NavLink></li>
      
      <li onClick={ handleLogout } ><NavLink to="/" className="sidenav-close" ><i className="fa fa-sign-out"></i>Log out</NavLink></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" className="sidenav-close" ><i className="fa fa-info"></i>About Me</a></li>
    </>
  )
}











export const SignedInPCLinks = ({ setUserData }) => {



  const history = useHistory();

  const handleLogout = ()=>{
    setUserData({
      user: undefined,
    });
    history.push('/')
  }




  return (
    <>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/search" >Search</NavLink></li>           
      <li><NavLink to="/contact">Contact Me</NavLink></li>           
      
      <li onClick={ handleLogout } ><NavLink to="/" className="sidenav-close" >Log out</NavLink></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" >About Me</a></li>
    </>
  )
}