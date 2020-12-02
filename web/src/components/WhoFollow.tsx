import React from 'react';

import profilePhoto from '../images/meggie-profile-photo.jpg';

import '../styles/components/who-follow.css';

const WhoFollow: React.FC = () => {
  return (
    <div className="who-follow-container">
      <img src={profilePhoto} alt=""/>
      <div className="user">
        <h2>Meggie</h2>
        <span>@meggiedoggy</span>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default WhoFollow;