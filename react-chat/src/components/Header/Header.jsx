import React from 'react';
import { ArrowBack, Search, Menu, MoreVert } from '@mui/icons-material';
import UserInfo from '../UserInfo/UserInfo'; 

import './Header.css';

const Header = ({ avatar, name, lastSeen, goBack, isChatPage }) => {
  return (
    <div className="header">
      {isChatPage ? (
        <>
            <div className="back-arrow" onClick={goBack}>
                <ArrowBack />
            </div>
            <UserInfo avatar={avatar} name={name} lastSeen={lastSeen} />
        </>
      ) : (
        <>
            <div className="burger">
                <Menu />
            </div>
            <div className="title">Messenger</div>
        </>
      )}
        <div className="search">
            <Search />
        </div>
        {isChatPage ? (
        <div className="more-vert">
            <MoreVert />
        </div>
        ) : null}
    </div>
  );
};

export default Header;
