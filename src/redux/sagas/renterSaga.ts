import { all, put, takeLatest } from 'redux-saga/effects';
import ActionTypes from '../actions/ActionTypes';
import user1 from '../../mock/user/user1';
import paymentTransactions from '../../mock/payment/paymentTransaction';
import account1 from '../../mock/account/account1';
import account2 from '../../mock/account/account2';
import { PaymentAccountForDisplayObjs } from '../reducers/types';

function* renterLogin() {
  yield put({ type: ActionTypes.UPDATE_RENTER, payload: user1 });
  yield put({
    type: ActionTypes.UPDATE_PAYMENT_HISTORY,
    payload: Object.values(paymentTransactions),
  });
  yield put({
    type: ActionTypes.UPDATE_PAYMENT_ACCOUNTS_INVOLVED,
    payload: [account1, account2].reduce<PaymentAccountForDisplayObjs>(
      (paymentAccountForDisplays, { id, ownerId }) => ({
        ...paymentAccountForDisplays,
        [id]: {
          id,
          ownerId,
          displayName: `Account_${id}`,
        },
      }),
      {}
    ),
  });
  yield put({ type: ActionTypes.UPDATE_PASSWORD, payload: '' });
  yield put({ type: ActionTypes.UPDATE_USERNAME, payload: '' });
}

function* renterSaga() {
  yield all([yield takeLatest(ActionTypes.RENTER_LOGIN, renterLogin)]);
}

export default renterSaga;
