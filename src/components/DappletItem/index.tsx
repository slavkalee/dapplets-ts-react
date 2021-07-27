import React from 'react';
import { IDapplet, ITag } from '../../interfaces';
import BurgerIcon from '../icons/BurgerIcon';
import { start_and_end } from '../../libs/helpers/utils';

import './DappletItem.scss';
import { useState } from 'react';
import { useMemo } from 'react';
import Tag from '../Tag';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { getAllTags } from '../../store/selectors/tags';

interface Props {
  data: IDapplet;
}

const DappletItem: React.FC<Props> = ({ data }) => {
  const tags = useSelector<RootState, ITag[]>(getAllTags());
  const [isInstalled, setInstalled] = useState(false);
  const [isHover, setHover] = useState(false);

  const tagsObject = useMemo(() => {
    return tags.reduce((acc: any, curr: ITag) => {
      acc[curr.id] = curr.name;
      return acc;
    }, {});
  }, [tags]);

  const onInstall = () => {
    setInstalled(!isInstalled);
  };

  const handleMouseOver = () => setHover(true);

  const handleMouseOut = () => setHover(false);

  const buttonName = useMemo(() => {
    if (isHover && isInstalled) {
      return 'UNINSTALL';
    }

    if (!isInstalled) {
      return 'INSTALL';
    }

    if (isInstalled) {
      return 'INSTALLED';
    }
  }, [isInstalled, isHover]);

  return (
    <li className="dapplet-item">
      <div className="dapplet-item__row">
        <div className="d-flex align-center">
          <div className="dapplet-item__carry">
            <BurgerIcon />
          </div>
          <div className="dapplet-item__logo">
            <img
              src={`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${data.icon}`}
              alt="logo"
            />
          </div>
        </div>
        <div className="dapplet-item__title">
          <div className="dapplet-item__title_text">{data.title}</div>
          <div className="dapplet-item__title_id">{start_and_end(data.id)}</div>
        </div>
        <div className="dapplet-item__desc">{data.description}</div>
        <div className="dapplet-item__author">{data.author}</div>
        <div className="dapplet-item__tags tags">
          {data.tags.map((tagId) => (
            <Tag key={`key_${tagId}`} name={tagsObject[+tagId]} />
          ))}
        </div>
        <div className="dapplet-item__install">
          <button
            className="btn btn-primary btn-install"
            onClick={onInstall}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {buttonName}
          </button>
        </div>
      </div>

      {/* <div className="dapplet-item__info"></div> */}
    </li>
  );
};

export default DappletItem;
