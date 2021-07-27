import React from 'react';
import Dapplets from '../components/Dapplets';
import api from '../libs/api/main-api';

const MainPage: React.FC = () => {
  return (
    <div>
      <Dapplets getData={api.getDapplets} />
    </div>
  );
};

export default MainPage;
