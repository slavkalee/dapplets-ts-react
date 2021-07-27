import { RootState } from '../reducers';

export const getAllTags = () => (state: RootState) => state.tags.tags;
