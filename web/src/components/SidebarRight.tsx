import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'

import TrendingTopicsCard from './TrendingTopicsCard';
import WhoFollow from './WhoFollow';

import '../styles/components/sidebarright.css';

const SidebarRight: React.FC = () => {
  return (
    <div className="sidebar-right-container">
      <div className="search-input">
        <AiOutlineSearch color='#828282' />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="trending-topics">
        <div className="trending-header">
          <h2>Brasil Trend</h2>
          <FiSettings color='#1DA1F2' size={20} />
        </div>
        <TrendingTopicsCard />
        <TrendingTopicsCard />
        <TrendingTopicsCard />
        <TrendingTopicsCard />
        <h2 className="show-more">Show more</h2>
      </div>

      <div className="who-follow">
        <h2 className="who-follow-title">Who to follow</h2>
        <WhoFollow />
        <WhoFollow />
        <WhoFollow />
        <WhoFollow />
        <h2 className="show-more">Show more</h2>
      </div>
    </div>
  );
};

export default SidebarRight;
