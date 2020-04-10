import { combineReducers } from 'redux';
import countReducer from './count';
import carReducer from './car';

const rootReducer = combineReducers({
  count: countReducer,
  car: carReducer,
});

export default rootReducer;
