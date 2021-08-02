import { ITag } from '../../interfaces';
import { RootState } from '../../store';

export const getAllTags = () => (state: RootState) => state.tags.data;

export const getTagsObject = () => (state: RootState) =>
  (state.tags.data || []).reduce(
    (acc: { [key: string]: string }, curr: ITag) => {
      acc[curr.id] = curr.name;
      return acc;
    },
    {}
  );
