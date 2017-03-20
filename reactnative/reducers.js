import { combineReducers } from 'redux';
import { START, STOP, RESET, RUN_TIMER } from './actionsTypes';
import { handleActions } from 'redux-actions';

// 原始默认state
const defaultState = {
  seconds: 0,
  runStatus: false
}

// function timer(state = defaultState, action) {
//   switch (action.type) {
//     case START:
//       return { ...state, runStatus: true };
//     case STOP:
//       return { ...state, runStatus: false };
//     case RESET:
//       return { ...state, seconds: 0 };
//     case RUN_TIMER:
//       return { ...state, seconds: state.seconds + 1 };
//     default:
//       return state;
//   }
// }

const timer = handleActions({
  START: (state, action) => ({ ...state, runStatus: true }),
  STOP: (state, action) => ({ ...state, runStatus: false }),
  RESET: (state, action) => ({ ...state, seconds: 0 }),
  RUN_TIMER: (state, action) => ({ ...state, seconds: state.seconds + 1 }),
}, defaultState);

export default combineReducers({
    timer
});
