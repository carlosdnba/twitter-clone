import React from 'react';

import Content from '../components/Content';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';

import '../styles/pages/home.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <SidebarLeft />
      <Content />
      <SidebarRight />
    </div>
  );
};

export default Home;
