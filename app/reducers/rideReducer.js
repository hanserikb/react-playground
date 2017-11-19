//import RideService from '../RideService';
import {
  REQUEST_RIDES,
  REQUEST_RIDES_SUCCESS,
  REQUEST_RIDES_FAIL,
  RESCIEVE_RIDES,
} from '../actions/rideActions';

export default function ridesReducer(state = {
  isLoading: false,
  data: [],
}, action) {
  switch (action.type) {
    case REQUEST_RIDES:
      return Object.assign({}, state, {
        isLoading: true,
        requestedAt: action.requestedAt,
      });
    case REQUEST_RIDES_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        rescievedAt: action.rescievedAt,
        isLoading: false,
      });
    case REQUEST_RIDES_FAIL:
      return Object.assign({}, state, {
        data: [],
        rescievedAt: action.rescievedAt,
        isLoading: false,
        error: 'Error when loding the rides:(',
      });
    default:
      return state;
  }
}