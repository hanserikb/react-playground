import RideService from '../RideService';

// Action types constants
export const REQUEST_RIDES = 'REQUEST_RIDES';
export const REQUEST_RIDES_SUCCESS = 'REQUEST_RIDES_SUCCESS';
export const REQUEST_RIDES_FAIL = 'REQUEST_RIDES_FAIL';

// Action creator
// Created an action, which is dispatched
export function requestRides() {
  return {
    type: REQUEST_RIDES,
    requestedAt: Date.now(),
  };
}

// Action creator
// Created an action which is dispatched
export function requestRidesSuccess(rides) {
  return {
    type: REQUEST_RIDES_SUCCESS,
    data: rides,
    rescievedAt: Date.now(),
  };
}
// Action creator
// Created an action which is dispatched
export function requestRidesError(error) {
  return {
    type: REQUEST_RIDES_FAIL,
    error: error,
    rescievedAt: Date.now(),
  };
}

// Thunk action creator
// Created an asyc action creator, which has the dispatcher injected.
// It's used to inform the store when the async data has been fetched, so it can tell the subscribers
export function fetchRides() {
  return function(dispatch) {
    dispatch(requestRides());
    return RideService.fetch()
      .then(rides => dispatch(requestRidesSuccess(rides)), error => {
        debugger;
        dispatch(requestRidesError(error));
      });
  };
}

