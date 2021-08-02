import React from 'react';
import { useSelector } from 'react-redux';
import { getError } from '../../store/selectors/dapplets';
import CloudIcon from '../icons/CloudIcon';
import SettingsIcon from '../icons/SettingsIcon';
import './Header.scss';

interface Props {
  collapsed: boolean;
}

const Header: React.FC<Props> = ({ collapsed }) => {
  const error = useSelector(getError());

  return (
    <header className={collapsed ? 'header header_collapsible' : 'header'}>
      <div className="header__extension--state extension--state">
        <div className="extension--state__icon">
          <CloudIcon />
        </div>
        <div className="extension--state__text">
          Extension state: &nbsp;
          {error ? (
            <span className="warning">{error.message}</span>
          ) : (
            <span className="success">Active</span>
          )}
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
