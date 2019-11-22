import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface GameState {
  readonly default: any;
}

/* --- ACTIONS --- */
type GameActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = GameState;
type ContainerActions = GameActions;

export { RootState, ContainerState, ContainerActions };
