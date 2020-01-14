import { Reducer } from 'redux';
import produce from 'immer';
/* eslint-disable no-param-reassign */
import { ActionWithPayload } from '../../utils/redux/types';
import ActionTypes from '../actions/actionTypes';

export interface State {
  redirectTo: string;
}

export const initialState: Readonly<State> = {
  redirectTo: '',
};

const reducer: Reducer<Readonly<State>, ActionWithPayload> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAYMENT_REDIRECT_TO: {
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
