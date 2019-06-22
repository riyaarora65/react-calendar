import reducer, { initialState } from './reducer';

export { reducer };

export const selectRoot = state => state.root || initialState;
