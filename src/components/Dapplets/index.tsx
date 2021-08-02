import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  DraggableProvided,
  DroppableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';

import ProgressBar from '@ramonak/react-progress-bar';

import {
  fetchDapplets,
  fetchMoreDapplets,
  onDragEnd,
} from '../../store/actions/dapplets';
import { fetchTags } from '../../store/actions/tags';
import {
  getAllDapplets,
  getDappletTotalCount,
  getLoading,
} from '../../store/selectors/dapplets';
import Filter from '../Filter';
import Loader from '../Loader';

import './Dapplets.scss';
import DappletItem from '../DappletItem';
import BurgerIcon from '../icons/BurgerIcon';
import { useMemo } from 'react';
import { DEFAULT_LIMIT } from '../../libs/helpers/vars';
import { IDapplet, IParams } from '../../interfaces';

const Dapplets: React.FC = () => {
  const [start, setStart] = useState(0);
  const [searchStr, setSearchStr] = useState('');
  const [sortKey, setSortKey] = useState('title');
  const [sortDirection, setSortDirection] = useState('ASC');

  const dapplets = useSelector(getAllDapplets());
  const loading = useSelector(getLoading());
  const totalCount = useSelector(getDappletTotalCount());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDapplets(params));
  }, [searchStr, sortKey, sortDirection]);

  useEffect(() => {
    if (start >= DEFAULT_LIMIT) {
      dispatch(fetchMoreDapplets(params));
    }
  }, [start]);

  const progress = useMemo(() => {
    const procent = (dapplets.length / totalCount) * 100;
    return Math.round(procent);
  }, [dapplets.length, totalCount]);

  const params: IParams = {
    limit: DEFAULT_LIMIT,
    start,
    filter: [],
    sort: [{ property: sortKey, direction: sortDirection }],
  };

  if (searchStr) {
    params.filter.push({ property: 'title', value: searchStr });
  }

  const handleSearchString = useCallback(
    (value: string) => {
      setStart(0);
      setSearchStr(value);
    },
    [setSearchStr]
  );

  const handleSortKey = useCallback(
    (value: string) => {
      setStart(0);
      setSortKey(value);
    },
    [setSortKey]
  );

  const handleSortDirection = useCallback(
    (value: string) => {
      setStart(0);
      setSortDirection(value);
    },
    [setSortDirection]
  );

  const handleLoadMore = () => {
    setStart((prev) => prev + DEFAULT_LIMIT);
  };

  const handleDragEnd = (result: DropResult, provided?: ResponderProvided) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    dispatch(onDragEnd(result.source.index, result.destination!.index));
  };

  return (
    <div className="dapplets">
      <Filter
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSearchChange={handleSearchString}
        onSortKeyChange={handleSortKey}
        onSortDirectionChange={handleSortDirection}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          {!loading && !dapplets.length && (
            <div className="no--results">No results...</div>
          )}
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="vertical">
              {(droppableProvided: DroppableProvided) => (
                <ul
                  className="dapplet-list"
                  ref={droppableProvided.innerRef}
                  {...droppableProvided.droppableProps}
                >
                  {dapplets.map((dapplet: IDapplet, index: number) => (
                    <Draggable
                      key={dapplet.id + Math.random()}
                      draggableId={dapplet.id}
                      index={index}
                    >
                      {(
                        draggableProvided: DraggableProvided,
                        snapshot: DraggableStateSnapshot
                      ) => {
                        return (
                          <div
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            style={{
                              ...draggableProvided.draggableProps.style,
                              background: snapshot.isDragging
                                ? '#63c7e9'
                                : 'none',
                              borderRadius: snapshot.isDragging
                                ? '10px'
                                : 'none',
                              top: snapshot.isDragging ? 'none' : 'none',
                              left: snapshot.isDragging ? 'none' : 'none',
                            }}
                          >
                            <DappletItem data={dapplet}>
                              <div {...draggableProvided.dragHandleProps}>
                                <BurgerIcon />
                              </div>
                            </DappletItem>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          {dapplets.length !== totalCount && (
            <div className="loading-more">
              <div className="loading-more__btn-container">
                <button
                  className="btn btn-icon btn-link"
                  onClick={handleLoadMore}
                >
                  Loading More Dapplets
                </button>
              </div>
              <ProgressBar
                className="progressbar"
                completed={progress}
                labelColor={'red'}
                width={'470px'}
                height={'5px'}
                isLabelVisible={false}
                baseBgColor={'#fff'}
                borderRadius={'3px'}
                bgColor={'#0085FF'}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dapplets;
