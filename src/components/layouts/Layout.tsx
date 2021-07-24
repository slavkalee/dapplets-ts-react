import React from 'react';
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <h1>MainLayout</h1>
      {children}
    </div>
  );
};

export default MainLayout;
