import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the game state domain
 */

const selectGameDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Game
 */

const makeSelectGame = () =>
  createSelector(
    selectGameDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectGame;
export { selectGameDomain };
