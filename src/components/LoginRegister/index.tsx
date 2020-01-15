import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Link from '../Link';
import { RenterPlusLoginState } from '../../redux/reducers/reducerCombo';
import actionCreator from '../../utils/redux/actionCreator';
import ActionTypes from '../../redux/actions/actionTypes';
import { ConnectedProps } from '../../utils/redux/types';
import user1 from '../../mock/user/user1';
import {
  paymentTransaction1,
  paymentTransaction2,
  paymentTransaction3,
  paymentTransaction4,
} from '../../mock/payment/paymentTransaction';

const LoginRegisterPageStyle = css`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const mapStateToProps = (state: RenterPlusLoginState) => ({
  redirectTo: state?.loginRegister?.redirectTo ?? '',
  username: state?.loginRegister?.username ?? '',
  password: state?.loginRegister?.password ?? '',
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUsername: actionCreator(dispatch, ActionTypes.UPDATE_USERNAME),
  setPassword: actionCreator(dispatch, ActionTypes.UPDATE_PASSWORD),
  setRedirectTo: actionCreator(dispatch, ActionTypes.UPDATE_LOGIN_REDIRECT_TO),
  setRenter: actionCreator(dispatch, ActionTypes.UPDATE_RENTER),
  setPaymentHistory: actionCreator(dispatch, ActionTypes.UPDATE_PAYMENT_HISTORY),
});

type Props = ConnectedProps<typeof mapStateToProps, typeof mapDispatchToProps>;

const LoginRegister: FC<Props> = ({
  username,
  password,
  redirectTo,
  setUsername,
  setPassword,
  setRedirectTo,
  setRenter,
  setPaymentHistory,
}) => {
  return (
    <div css={LoginRegisterPageStyle}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Link href={redirectTo}>
        <a
          onClick={() => {
            setRenter(user1);
            setPaymentHistory([
              paymentTransaction1,
              paymentTransaction2,
              paymentTransaction3,
              paymentTransaction4,
            ]);
            setRedirectTo('');
          }}
        >
          Login
        </a>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);
