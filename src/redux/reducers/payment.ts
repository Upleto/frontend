import { Reducer } from 'redux';
import produce from 'immer';
/* eslint-disable no-param-reassign */
import { ActionWithPayload } from '../../utils/redux/types';
import ActionTypes from '../actions/actionTypes';
import { PaymentTransaction } from './types';

export interface State {
  redirectTo: string;
  paymentHistory: PaymentTransaction[];
}

export const initialState: Readonly<State> = {
  redirectTo: '',
  paymentHistory: [],
};

const reducer: Reducer<Readonly<State>, ActionWithPayload> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAYMENT_REDIRECT_TO: {
      return produce(state, draftState => {
        draftState.redirectTo = action.payload as string;
      });
    }
    case ActionTypes.UPDATE_PAYMENT_HISTORY: {
      return produce(state, draftState => {
        draftState.paymentHistory = action.payload as PaymentTransaction[];
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
