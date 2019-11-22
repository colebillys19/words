import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the gamePage state domain
 */

const selectGamePageDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by GamePage
 */

const makeSelectGamePage = () =>
  createSelector(
    selectGamePageDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectGamePage;
export { selectGamePageDomain };
