import { Reducer } from 'redux';
import produce from 'immer';
/* eslint-disable no-param-reassign */
import { ActionWithPayload } from '../../utils/redux/types';
import ActionTypes from '../actions/ActionTypes';

export interface State {
  leaseAgreementLink: string;
  redirectTo: string;
}

export const initialState: Readonly<State> = {
  leaseAgreementLink: '',
  redirectTo: '',
};

const reducer: Reducer<Readonly<State>, ActionWithPayload> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_LEASE_AGREEMENT_LINK: {
      return produce(state, draftState => {
        draftState.leaseAgreementLink = action.payload as string;
      });
    }
    case ActionTypes.UPDATE_LEASE_AGREEMENT_REDIRECT_TO: {
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
