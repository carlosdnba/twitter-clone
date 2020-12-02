import React from 'react';
import {
  AiOutlineTwitter,
  AiFillHome,
  AiOutlineBell,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import { FiBookmark } from 'react-icons/fi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { RiFileList2Line } from 'react-icons/ri';
import { Menu, MenuItem, Switch } from '@material-ui/core';

import profilePhoto from '../images/profile-photo.jpg';

import '../styles/components/sidebarleft.css';

const SidebarLeft: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTheme = () => {
    const e = document.body;
    e.classList.toggle('dark-mode');
  };

  return (
    <div className="sidebar-left-container">
      <AiOutlineTwitter size={32} className="twitter-icon" />
      <div className="icons-column">
        <button className="icon">
          <AiFillHome className="active" size={26} />
          <span className="active">Home</span>
        </button>

        <button className="icon">
          <HiOutlineHashtag size={26} />
          <span>Explore</span>
        </button>

        <button className="icon">
          <AiOutlineBell size={26} />
          <span>Notifications</span>
        </button>


        <button className="icon">
          <AiOutlineMail size={26} />
          <span>Messages</span>
        </button>

        <button className="icon">
          <FiBookmark size={26} />
          <span>Bookmarks</span>
        </button>

        <button className="icon">
          <RiFileList2Line size={26} />
          <span>Lists</span>
        </button>

        <button className="icon">
          <img src={profilePhoto} alt="" />
          <span>Home</span>
        </button>

        <button className="icon" onClick={handleClickMenu}>
          <CgMoreO size={26} />
          <span>More</span>
        </button>

        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem id="menu-item">
            Dark mode <Switch color="primary" onChange={handleTheme} />
          </MenuItem>
        </Menu>
      </div>

      <button className="tweet-btn">Tweet</button>
    </div>
  );
};

export default SidebarLeft;
