import React from 'react';
import { useState } from 'react';
import bg1 from '../../libs/img/11.png';
import bg2 from '../../libs/img/22.png';
import bg3 from '../../libs/img/33.png';
import Header from '../Header';
import RightSide from '../RightSide';
import Sidebar from '../Sidebar';

import './Layout.scss';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(true);
  };

  const onExpand = () => {
    setCollapsed(false);
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
      />
      <RightSide />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
