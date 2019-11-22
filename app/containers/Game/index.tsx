/*
 *
 * Game
 *
 */

import React, { memo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectGame from './selectors';
import reducer from './reducer';
import saga from './saga';

// const stateSelector = createStructuredSelector({
//   game: makeSelectGame(),
// });

interface Props {}

function Game(props: Props) {
  useInjectReducer({ key: 'game', reducer: reducer });
  useInjectSaga({ key: 'game', saga: saga });

  // const { game } = useSelector(stateSelector);
  // const dispatch = useDispatch();
  return <div>Game</div>;
}

export default memo(Game);
