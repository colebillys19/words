import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface GamePageState {
  readonly default: any;
}

/* --- ACTIONS --- */
type GamePageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = GamePageState;
type ContainerActions = GamePageActions;

export { RootState, ContainerState, ContainerActions };
