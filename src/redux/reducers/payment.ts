import { Reducer } from 'redux';
import produce from 'immer';
/* eslint-disable no-param-reassign */
import { ActionWithPayload } from '../../utils/redux/types';
import ActionTypes from '../actions/ActionTypes';
import { PaymentTransactionObjs, PaymentAccountForDisplayObjs } from './types';

export interface State {
  redirectTo: string;
  paymentHistory: PaymentTransactionObjs;
  paymentAccountsInvolved: PaymentAccountForDisplayObjs;
}

export const initialState: Readonly<State> = {
  redirectTo: '',
  paymentHistory: {},
  paymentAccountsInvolved: {},
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
        draftState.paymentHistory = action.payload as PaymentTransactionObjs;
      });
    }
    case ActionTypes.UPDATE_PAYMENT_ACCOUNTS_INVOLVED: {
      return produce(state, draftState => {
        draftState.paymentAccountsInvolved = action.payload as PaymentAccountForDisplayObjs;
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
