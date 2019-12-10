import { Reducer } from 'redux';
import { ActionWithPayload } from '../../utils/redux/types';
import ActionTypes from '../actions/actionTypes';
import objectAssign from '../../utils/common/objectAssign';

export interface State {
  a: number;
}

export const initialState: Readonly<State> = {
  a: 0,
};

const reducer: Reducer<Readonly<State>, ActionWithPayload> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_A: {
      return objectAssign()({}, state, action.payload as Readonly<Partial<State>>);
    }
    case ActionTypes.INCREASE_A: {
      return {
        ...state,
        a: (action.payload as Readonly<number>) + state.a,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
