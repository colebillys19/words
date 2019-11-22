import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface LandingState {
  readonly default: any;
}

/* --- ACTIONS --- */
type LandingActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = LandingState;
type ContainerActions = LandingActions;

export { RootState, ContainerState, ContainerActions };
