import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import '../styles/components/trending-topics-card.css';

const TrendingTopicsCard: React.FC = () => {
  return (
    <div className="trending-topics-card-container">
      <div className="card-header">
        <span>1. Trending</span>
        <IoIosArrowDown color='#828282' size={12} />
      </div>
      <h2>Liverpool vs Sheffield</h2>
      <span className="trending-cont">456K Tweets</span>
    </div>
  );
};

export default TrendingTopicsCard;