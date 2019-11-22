import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the landingPage state domain
 */

const selectLandingPageDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by LandingPage
 */

const makeSelectLandingPage = () =>
  createSelector(
    selectLandingPageDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectLandingPage;
export { selectLandingPageDomain };
