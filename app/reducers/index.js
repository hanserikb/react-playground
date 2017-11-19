import { combineReducers } from 'redux';
import rides from './rideReducer';


const rootReducer = combineReducers({
  rides: rides,
});

export default rootReducer;
