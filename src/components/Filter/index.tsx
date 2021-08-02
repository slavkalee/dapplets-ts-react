import React, { useMemo, memo } from 'react';
import { ChangeEvent } from 'react';
import { debounce } from 'lodash';

import SearchIcon from '../icons/SearchIcon';

import './Filter.scss';

interface Props {
  onSearchChange: (value: string) => void;
  onSortKeyChange: (value: string) => void;
  onSortDirectionChange: (value: string) => void;
  sortKey: string;
  sortDirection: string;
}

const Filter: React.FC<Props> = ({
  onSearchChange,
  onSortKeyChange,
  onSortDirectionChange,
  sortKey,
  sortDirection,
}) => {
  const debounced = useMemo(
    () =>
      debounce((e: ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
      }, 400),
    [onSearchChange]
  );

  const handleSearchStringChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounced(e);
  };

  const handleSortKeyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSortKeyChange(e.target.value);
  };

  const handleSortDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSortDirectionChange(e.target.value);
  };

  return (
    <div className="filter">
      <div className="filter__group filter__group_lg">
        <input
          className="filter__control"
          type="text"
          onChange={handleSearchStringChange}
          placeholder="Search"
        />
        <div className="filter__icon">
          <SearchIcon />
        </div>
      </div>
      <div className="filter__group filter__group_sm filter__group_select">
        <select
          className="filter__select"
          value={sortKey}
          onChange={handleSortKeyChange}
        >
          <option value="released">Release Date</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div className="filter__group filter__group_sm filter__group_select">
        <select
          className="filter__select"
          value={sortDirection}
          onChange={handleSortDirectionChange}
        >
          <option value="DESC">Descending</option>
          <option value="ASC">Ascending</option>
        </select>
      </div>
    </div>
  );
};

export default memo(Filter);
