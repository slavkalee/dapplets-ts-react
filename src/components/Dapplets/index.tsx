import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { IDapplet } from '../../interfaces';
import DappletList from '../DappletList';
import Filter from '../Filter';
import Loader from '../Loader';

import './Dapplets.scss';

const Dapplets: React.FC<any> = ({ getData }) => {
  const [limit, setLimit] = useState(20);
  const [searchStr, setSearchStr] = useState('');
  const [sortKey, setSortKey] = useState('released');
  const [sortDirection, setSortDirection] = useState('DESC');
  const [data, setData] = useState<Partial<IDapplet[]>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDapplets();
  }, [limit, searchStr, sortKey, sortDirection]);

  async function getDapplets() {
    const params: any = {
      start: 0,
      limit,
      filter: [],
      sort: [{ property: sortKey, direction: sortDirection }],
    };

    await setLoading(true);

    if (searchStr) {
      params.filter.push({ property: 'title', value: searchStr });
    }

    if (params.filter.length) {
      params.filter = JSON.stringify(params.filter);
    }

    if (params.sort.length) {
      params.sort = JSON.stringify(params.sort);
    }

    await getData(params).then((response: any) => {
      setData(response.data);
    });

    await setLoading(false);
  }

  const handleSearchString = useCallback(
    (value: string) => {
      setSearchStr(value);
    },
    [setSearchStr]
  );

  const handleSortKey = useCallback(
    (value: string) => {
      setSortKey(value);
    },
    [setSortKey]
  );

  const handleSortDirection = useCallback(
    (value: string) => {
      setSortDirection(value);
    },
    [setSortDirection]
  );

  return (
    <div className="dapplets">
      {/* <pre>
        searchStr: {searchStr} <br />
        sortKey: {sortKey} <br />
        sortDirection: {sortDirection} <br />
      </pre> */}
      <Filter
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSearchChange={handleSearchString}
        onSortKeyChange={handleSortKey}
        onSortDirectionChange={handleSortDirection}
      />
      {loading ? <Loader /> : <DappletList data={data} />}
    </div>
  );
};

export default Dapplets;
