import React from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import CloseTagIcon from '../icons/CloseTagIcon';
import RedCloseIcon from '../icons/RedCloseIcon';
import InputField from '../InputField';
import './RightSide.scss';

const RightSide: React.FC = () => {
  return (
    <div className="right-side">
      <div className="hide">
        <button className="btn btn-icon">
          <ArrowRightIcon />
        </button>
      </div>
      <div className="right-side__title">DAPPLET SETTINGS</div>
      <InputField
        label="Create new list"
        buttonName="Create"
        placeholder="List Name"
      />
      <InputField label="New tag" buttonName="Create" placeholder="Tag Name" />
      <div className="right-side__tags">
        <div className="right-side__tags--row">
          <div className="right-side__tags--title">My Tags</div>
          <div className="right-side__tags--body">
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

        <div className="right-side__tags--row">
          <div className="right-side__tags--title">Community Tags</div>
          <div className="right-side__tags--body">
            <div className="tags__item">
              <button className="btn btn-tag btn-success">
                Twitter
                <span className="close-tag">
                  <CloseTagIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side__working working">
        <div className="working__title">Working On</div>
        <ul className="working__sites">
          <li className="working__site">
            <div className="working__site--remove">
              <RedCloseIcon />
            </div>
            <div className="working__site--name">twitter.com</div>
          </li>
          <li className="working__site">
            <div className="working__site--remove">
              <RedCloseIcon />
            </div>
            <div className="working__site--name">
              twitter.com/randomusername
            </div>
          </li>
          <li className="working__site">
            <div className="working__site--remove">
              <RedCloseIcon />
            </div>
            <div className="working__site--name">facebook.com</div>
          </li>
          <li className="working__site">
            <div className="working__site--remove">
              <RedCloseIcon />
            </div>
            <div className="working__site--name">
              facebook.com/randomusername
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
