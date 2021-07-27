import React from 'react';
import CloseTagIcon from '../icons/CloseTagIcon';
import './Tag.scss';

interface Props {
  name: string;
  color?: string;
}

const Tag: React.FC<Props> = ({ name, color = 'secondary' }) => {
  return (
    <div className="tag-item">
      <button className={`btn btn-tag btn-${color}`}>
        {name}
        <span className="close-tag">
          <CloseTagIcon />
        </span>
      </button>
    </div>
  );
};

export default Tag;
