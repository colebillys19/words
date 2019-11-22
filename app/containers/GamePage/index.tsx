/*
 *
 * GamePage
 *
 */

import React, { memo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectGamePage from './selectors';
import reducer from './reducer';
import saga from './saga';

// const stateSelector = createStructuredSelector({
  // gamePage: makeSelectGamePage(),
// });

interface Props {}

function GamePage(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'gamePage', reducer: reducer });
  useInjectSaga({ key: 'gamePage', saga: saga });

  // const { gamePage } = useSelector(stateSelector);
  // const dispatch = useDispatch();
  return <div>Game Page</div>;
}

export default memo(GamePage);
