/*
 *
 * LandingPage
 *
 */

import React, { memo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// const stateSelector = createStructuredSelector({
  // landingPage: makeSelectLandingPage(),
// });

interface Props {}

function LandingPage(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'landingPage', reducer: reducer });
  useInjectSaga({ key: 'landingPage', saga: saga });

  // const { landingPage } = useSelector(stateSelector);
  // const dispatch = useDispatch();
  return <div>Landing Page</div>;
}

export default memo(LandingPage);
