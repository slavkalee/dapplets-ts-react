import { RootState } from '../../store';

export const getAllDapplets = () => (state: RootState) => state.dapplets.data;
export const getLoading = () => (state: RootState) =>
  state.dapplets.loading && state.dapplets.isFirstCall;
export const getDappletTotalCount = () => (state: RootState) =>
  state.dapplets.total;
export const getError = () => (state: RootState) => state.dapplets.errors;
