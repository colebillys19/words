import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the landing state domain
 */

const selectLandingDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Landing
 */

const makeSelectLanding = () =>
  createSelector(
    selectLandingDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectLanding;
export { selectLandingDomain };
