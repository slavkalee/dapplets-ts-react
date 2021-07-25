import React from 'react';

import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import CloseTagIcon from '../icons/CloseTagIcon';
import DappletIcon from '../icons/DappletIcon';
import GridIcon from '../icons/GridIcon';
import HeartIcon from '../icons/HeartIcon';
import LogoIcon from '../icons/LogoIcon';
import TrendingIcon from '../icons/TrendingIcon';
import UsersIcon from '../icons/UsersIcon';
import NavItem from '../NavItem';
import './Sidebar.scss';

interface Props {
  collapsed: boolean;
  onCollapse: () => void;
  onExpand: () => void;
}

const Sidebar: React.FC<Props> = ({ collapsed, onCollapse, onExpand }) => {
  return (
    <div className={collapsed ? 'sidebar sidebar_collapsible' : 'sidebar'}>
      <div className="sidebar__header">
        <div className="logo">
          <div className="logo__icon">
            <LogoIcon />
          </div>
          <div className="logo__text">
            Dapplets Project<span>.</span>
          </div>
        </div>
        <div className="hide">
          <button className="btn btn-icon" onClick={onCollapse}>
            <ArrowLeftIcon />
          </button>
        </div>
      </div>
      <nav className="sidebar__nav">
        <NavItem
          name="All Dapplets"
          icon={<DappletIcon />}
          path="/"
          collapsed={collapsed}
          onExpand={onExpand}
        />
        <NavItem
          name="Editor Choice"
          icon={<HeartIcon />}
          path="/editor"
          collapsed={collapsed}
        />
        <NavItem
          name="Essential Dapplets"
          icon={<GridIcon />}
          path="/essential"
          collapsed={collapsed}
        />
        <NavItem
          name="Social Networks"
          icon={<UsersIcon />}
          path="/social"
          collapsed={collapsed}
        />
        <NavItem
          name="Financial Dapplets"
          icon={<TrendingIcon />}
          path="/finance"
          collapsed={collapsed}
        />
      </nav>

      <div className="sidebar__lists lists">
        <div className="lists__title">My Lists</div>
        <ul className="lists__body">
          <li className="lists__item">
            TOP-10 Twitter Dapplets (<span>Me</span>)
          </li>
          <li className="lists__item">
            Best Financial dapplets by Jack (<span>Jack</span>)
          </li>
          <li className="lists__item">
            TOP-10 Twitter Dapplets (<span>Me</span>)
          </li>
        </ul>
      </div>
      <div className="sidebar__tags tags">
        <div className="tags__title">My tags</div>
        <div className="tags__body">
          <div className="tags__item">
            <button className="btn btn-tag btn-secondary">
              Twitter
              <span className="close-tag">
                <CloseTagIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
