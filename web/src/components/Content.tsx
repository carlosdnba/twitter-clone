import React from 'react';
import { WiStars } from 'react-icons/wi';

import meProfilePhoto from '../images/profile-photo.jpg';
import meggieProfilePhoto from '../images/meggie-profile-photo.jpg';
import broProfilePhoto from '../images/bro-profile-photo.jpeg';
import gifIcon from '../images/gif-icon.png';
import imageIcon from '../images/image-icon.png';
import statsIcon from '../images/stats-icon.png';
import smileIcon from '../images/smile-icon.png';

import Tweet from './Tweet';

import '../styles/components/content.css';

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <header>
        <h2>Home</h2>
        <WiStars size={28} color="#1da1f2" />
      </header>

      <div className="tweet-box">
        <div className="tweet-box-top">
          <img src={meProfilePhoto} alt="" />
          <input type="text" placeholder="What's happening" />
        </div>
        <div className="tweet-box-row">
          <div className="bottom-icons">
            <img src={imageIcon} alt="" />
            <img src={gifIcon} alt="" />
            <img src={statsIcon} alt="" />
            <img src={smileIcon} alt="" />
          </div>
          <div className="right-tweet">
            <div className="circle" />
            <div className="divider" />
            <div className="plus-btn">
              <span>+</span>
            </div>
            <button>
              <span>Tweet</span>
            </button>
          </div>
        </div>
      </div>

      <div className="divider" />
      <nav>
        <Tweet
          path={meProfilePhoto}
          nickname="Carlos"
          username="carlosdnba"
          time={16}
          tweet="site ta ficando maneiro hein"
        />
        <Tweet
          path={broProfilePhoto}
          nickname="Mano"
          username="mano"
          time={34}
          tweet="This is a tweet. It can be long, or short. Depends on what you have
          to say. This is a tweet. It can be long, or short. Depends on what you have to say."
        />
        <Tweet
          path={meggieProfilePhoto}
          nickname="Meggie"
          username="meggiedoggy"
          time={59}
          tweet="This is a tweet. It can be long, or short. Depends on what you have
            to say. This is a tweet. It can be long, or short. Depends on what you have to say."
        />
        <Tweet
          path={meggieProfilePhoto}
          nickname="Meggie"
          username="meggiedoggy"
          time={58}
          tweet="to com fome"
        />
      </nav>
    </div>
  );
};

export default Content;
