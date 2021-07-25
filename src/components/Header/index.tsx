import React from 'react';
import CloudIcon from '../icons/CloudIcon';
import SettingsIcon from '../icons/SettingsIcon';
import './Header.scss';

interface Props {
  collapsed: boolean;
}

const Header: React.FC<Props> = ({ collapsed }) => {
  return (
    <header className={collapsed ? 'header header_collapsible' : 'header'}>
      <div className="header__extension--state extension--state">
        <div className="extension--state__icon">
          <CloudIcon />
        </div>
        <div className="extension--state__text">
          Extension state: <span>Active</span>
        </div>
      </div>
      <div className="header__settings settings">
        <div className="settings__icon">
          <SettingsIcon />
        </div>
        <div className="settings__text">Settings</div>
      </div>
    </header>
  );
};

export default Header;
