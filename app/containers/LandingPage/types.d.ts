import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface LandingPageState {
  readonly default: any;
}

/* --- ACTIONS --- */
type LandingPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = LandingPageState;
type ContainerActions = LandingPageActions;

export { RootState, ContainerState, ContainerActions };
