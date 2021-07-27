import React from 'react';
import { IDapplet } from '../../interfaces';
import DappletItem from '../DappletItem';

import './DappletList.scss';

const DappletList: React.FC<any> = ({ data }) => {
  return (
    <ul className="dapplet-list">
      {data.map((dapplet: IDapplet) => (
        <DappletItem data={dapplet} key={dapplet.id} />
      ))}
    </ul>
  );
};

export default DappletList;
