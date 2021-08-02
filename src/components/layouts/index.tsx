import React, { useState } from 'react';

import Header from '../Header';
import RightSide from '../RightSide';
import Sidebar from '../Sidebar';

import bg1 from '../../assets/img/11.png';
import bg2 from '../../assets/img/22.png';
import bg3 from '../../assets/img/33.png';

import './Layout.scss';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(true);
  };

  const onExpand = () => {
    setCollapsed(false);
  };

  const onToggle = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="layout">
      <img className="layout__bg layout__bg_bg1" src={bg1} alt="bg1" />
      <img className="layout__bg layout__bg_bg2" src={bg2} alt="bg2" />
      <img className="layout__bg layout__bg_bg3" src={bg3} alt="bg3" />
      <Header collapsed={isCollapsed} />
      <Sidebar
        collapsed={isCollapsed}
        onCollapse={onCollapse}
        onExpand={onExpand}
        onToggle={onToggle}
      />
      <RightSide />

      <main
        className={
          isCollapsed
            ? 'layout__content layout__content_collapsible'
            : 'layout__content'
        }
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
