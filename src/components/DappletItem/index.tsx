import React, { useEffect, useState, useMemo, BaseSyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import { IDapplet, ITagObject } from '../../interfaces';
import { start_and_end } from '../../libs/helpers/utils';
import { RootState } from '../../store';
import { getTagsObject } from '../../store/selectors/tags';
import Tag from '../Tag';
import nologo from '../../assets/img/nologo.png';
import UninstallIcon from '../icons/UninstallIcon';
import DownloadIcon from '../icons/DownloadIcon';
import CompleteIcon from '../icons/CompleteIcon';

import './DappletItem.scss';

interface Props {
  data: IDapplet;
  children: React.ReactNode;
}

const DappletItem: React.FC<Props> = ({ data, children }) => {
  const tags = useSelector<RootState, ITagObject>(getTagsObject());
  const [isInstalled, setInstalled] = useState(false);
  const [isHover, setHover] = useState(false);
  const [bodyVisible, setBodyVisible] = useState(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      const raw = localStorage.getItem(`installState__${data.id}`) || 'false';
      setInstalled(JSON.parse(raw));
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      localStorage.setItem(
        `installState__${data.id}`,
        JSON.stringify(isInstalled)
      );
    }
  }, [isInstalled, data]);

  const fill = useMemo(() => {
    if (isHover && isInstalled) {
      return 'orange';
    }

    if (!isInstalled) {
      return 'primary';
    }

    if (isInstalled) {
      return 'disabled';
    }
  }, [isInstalled, isHover]);

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

  const buttonIcon = useMemo(() => {
    if (isHover && isInstalled) {
      return <UninstallIcon />;
    }

    if (!isInstalled) {
      return <DownloadIcon />;
    }

    if (isInstalled) {
      return <CompleteIcon />;
    }
  }, [isInstalled, isHover]);

  const compressId = useMemo(() => {
    return start_and_end(data.id + '');
  }, [data.id]);

  const toggleVisible = () => setBodyVisible(!bodyVisible);

  const onError = () => setError(true);

  const onInstall = (e: Event | BaseSyntheticEvent) => {
    e.stopPropagation();
    setInstalled(!isInstalled);
  };

  const handleMouseOver = () => setHover(true);

  const handleMouseOut = () => setHover(false);

  return (
    <li
      className={
        bodyVisible ? 'dapplet-item dapplet-item_deployed' : 'dapplet-item'
      }
      onClick={toggleVisible}
    >
      <div className="dapplet-item__row">
        <div className="d-flex align-center">
          <div className="dapplet-item__carry">{children}</div>
          <div className="dapplet-item__logo">
            {isError ? (
              <img src={nologo} alt="nologo" />
            ) : (
              <img
                src={`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${data.icon}`}
                alt="logo"
                onError={() => {
                  onError();
                }}
              />
            )}
          </div>
        </div>
        <div className="dapplet-item__title">
          <div className="dapplet-item__title_text">{data.title}</div>
          <div className="dapplet-item__title_id">{compressId}</div>
        </div>
        <div className="dapplet-item__desc">{data.description}</div>
        <div className="dapplet-item__author">{data.author}</div>
        <div className="dapplet-item__tags tags">
          {data.tags &&
            data.tags.map(
              (tagId) =>
                tags[+tagId] && <Tag key={`key_${tagId}`} name={tags[+tagId]} />
            )}
        </div>
        <div className="dapplet-item__install">
          <button
            className={`btn btn-install btn-${fill}`}
            onClick={onInstall}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {buttonName}
          </button>
        </div>

        <div className="dapplet-item__install--mini">
          <button
            className={`btn btn-install--mini btn-${fill}`}
            onClick={onInstall}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {buttonIcon}
          </button>
        </div>
      </div>

      <div className="dapplet-item__info">
        <div className="dapplet-item__info--mainText text">
          <div className="text__title">Aliquam sit</div>
          <div className="text__content">{data.text_1}</div>
        </div>
        <div className="dapplet-item__info--simpleTexts">
          {data.text_2 && (
            <div className="simple--text text">
              <div className="text__title">Semper neque</div>
              <div className="text__content">{data.text_2}</div>
            </div>
          )}
          {data.text_3 && (
            <div className="simple--text text">
              <div className="text__title">Leo ipsum.</div>
              <div className="text__content">{data.text_3}</div>
            </div>
          )}
          {data.text_4 && (
            <div className="simple--text text">
              <div className="text__title">Elit sagittis et.</div>
              <div className="text__content">{data.text_4}</div>
            </div>
          )}

          {data.text_5 && (
            <div className="simple--text text">
              <div className="text__title">Aliquam.</div>
              <div className="text__content">{data.text_5}</div>
            </div>
          )}
          {data.text_6 && (
            <div className="simple--text text">
              <div className="text__title">In euismod.</div>
              <div className="text__content">{data.text_6}</div>
            </div>
          )}
          {data.text_7 && (
            <div className="simple--text text">
              <div className="text__title">Justo amet.</div>
              <div className="text__content">{data.text_7}</div>
            </div>
          )}
          {data.text_8 && (
            <div className="simple--text text">
              <div className="text__title">Urna.</div>
              <div className="text__content">{data.text_8}</div>
            </div>
          )}
          {data.text_9 && (
            <div className="simple--text text">
              <div className="text__title">Nam diam.</div>
              <div className="text__content">{data.text_9}</div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default DappletItem;
