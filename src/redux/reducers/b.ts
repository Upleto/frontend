import { Reducer } from 'redux';
import { ActionWithPayload } from '../../utils/redux/types';
import ActionTypes from '../actions/ActionTypes';
import objectAssign from '../../utils/common/objectAssign';

export interface State {
  b: number;
}

export const initialState: Readonly<State> = {
  b: 10,
};

const reducer: Reducer<Readonly<State>, ActionWithPayload> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_B: {
      return objectAssign()({}, state, action.payload as Readonly<Partial<State>>);
    }
    case ActionTypes.DECREASE_B: {
      return {
        ...state,
        b: state.b - (action.payload as Readonly<number>),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
