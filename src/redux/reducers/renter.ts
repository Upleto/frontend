import { Reducer } from 'redux';
import { ActionWithPayload } from '../../utils/redux/types';
import ActionTypes from '../actions/actionTypes';
import { User, Booking, PaymentTransaction } from './types';

export interface Renter extends User {
  rental: Booking[];
  paymentHistory: PaymentTransaction[];
}

export type State = Renter | null;

export const initialState: Readonly<State> = null;

const reducer: Reducer<Readonly<State>, ActionWithPayload> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_RENTER: {
      return action.payload as Readonly<State>;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
