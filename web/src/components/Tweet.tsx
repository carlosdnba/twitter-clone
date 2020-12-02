import React from 'react';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

import '../styles/components/tweet.css';

interface tweetProps {
  path: string;
  nickname: string;
  username: string;
  time: number;
  tweet: string;
}

const Tweet = ({ path, nickname, username, time, tweet }: tweetProps) => {
  return (
    <div className="tweet-container">
      <img src={path} alt="Profile" />
      <div className="tweet-body">
        <div className="tweet-header">
          <div className="left">
            <h2>{nickname}</h2>
            <span>@{username}</span>
            <div className="tweet-divider" />
            <span>{time}s</span>
          </div>
          <IoIosArrowDown color="#4f4f4f" />
        </div>

        <div className="tweet-content">
          <span>
            {tweet}
          </span>
        </div>

        <div className="tweet-footer">
          <FaRegComment color="#828282" size={15} />
          <AiOutlineRetweet color="#828282" />
          <AiOutlineHeart color="#828282" />
          <BsUpload color="#828282" />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
