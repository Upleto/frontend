import { Reducer } from 'redux';
import produce from 'immer';
import { ActionWithPayload } from '../../utils/redux/types';
import ActionTypes from '../actions/actionTypes';

export interface State {
  username: string;
  password: string;
  redirectTo: string;
}

export const initialState: Readonly<State> = {
  username: '',
  password: '',
  redirectTo: '',
};

const reducer: Reducer<Readonly<State>, ActionWithPayload> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USERNAME: {
      return produce(state, draftState => {
        draftState.username = action.payload as string;
      });
    }
    case ActionTypes.UPDATE_PASSWORD: {
      return produce(state, draftState => {
        draftState.password = action.payload as string;
      });
    }
    case ActionTypes.UPDATE_REDIRECT_TO: {
      return produce(state, draftState => {
        draftState.redirectTo = action.payload as string;
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
