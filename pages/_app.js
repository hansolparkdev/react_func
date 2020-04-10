/* eslint-disable no-shadow */
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../node_modules/react-day-picker/lib/style.css';

const RootApp = ({ Component, store }) => (
  <Provider store={store}>
    <Component />
  </Provider>
);

export default withRedux(() => (store))(RootApp);
