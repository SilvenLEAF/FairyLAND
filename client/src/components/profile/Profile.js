import M from 'materialize-css'
import '../../styles/Profile.scss'


import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/subContexts/AuthContext';




function Profile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  

  const deleteProfile = async (e) =>{
    e.preventDefault();

    const requestedUserId = userData._id;
    
    const deletedProfileRes = await fetch('/users/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({requestedUserId})
    });

    const deletedProfileData = await deletedProfileRes.json();

    console.log(deletedProfileData)
    window.location.href = `/login`
  }


  // if(!userData._id) history.push('/login')

  return (
    <div className="container myProfileContainer">      
      <div className="mainProfileIcon" style={{background: `url("/REGENDO/Logo.png") center/cover`}} ></div>

      <div className="myProfileMainHeader">
        <h3>SilvenLEAF SilvenLEAF</h3>
        <h5>Fullstack Developer</h5>
        <p className="red-text"> Mt View, California, USA </p>
      </div>

      <div className="myProfileInfo">
        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-home"></i> lives in 
          </div>
          <div className="myProfileInfoAnswer">
            Mt View, California, USA
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-medkit"></i> working at
          </div>
          <div className="myProfileInfoAnswer">
            home due to coronavirus
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-graduation-cap"></i> career status
          </div>
          <div className="myProfileInfoAnswer">
            Fullstack Developer at SilvenLEAF ORG
          </div>
        </div>






        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-share-alt"></i> website link
          </div>
          <div className="myProfileInfoAnswer">
            <a href="#" target="silvenleaf.github.io">
              silvenleaf.github.io
            </a>
          </div>
        </div>


      </div>


      <p className="myProfileAbout">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sunt a quae tenetur iure? Sit repellendus necessitatibus unde iusto. Dignissimos quisquam consectetur vel velit rerum tempore, a accusamus saepe modi tempora sit quo? Laudantium nihil eligendi quidem. Enim nulla odit ad tenetur molestias perferendis? Culpa obcaecati voluptatum harum debitis id?
      </p>

    </div>
  )
}

export default Profile
