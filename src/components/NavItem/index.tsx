import React from 'react';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavItem.scss';

interface Props {
  name: string;
  icon: React.ReactElement;
  path: string;
  collapsed: boolean;
  onExpand?: () => void;
}

const NavItem: React.FC<Props> = ({
  name,
  icon,
  path,
  collapsed,
  onExpand,
}) => {
  const location = useLocation();

  const active = useMemo(
    () => location.pathname === path,
    [path, location.pathname]
  );

  const navItem = active ? 'nav-item nav-item_active' : 'nav-item';

  return (
    <Link to={path}>
      <div className={navItem} onClick={onExpand}>
        <div className="nav-item__icon">{icon}</div>
        {!collapsed && <div className="nav-item__name">{name}</div>}
      </div>
    </Link>
  );
};

export default NavItem;
