import {
  createStore, compose,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares))
  : composeWithDevTools(
    applyMiddleware(...middlewares),
  );

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
