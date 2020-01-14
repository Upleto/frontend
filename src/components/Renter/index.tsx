import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Link from '../Link';
import actionCreator from '../../utils/redux/actionCreator';
import ActionTypes from '../../redux/actions/actionTypes';
import { ConnectedProps } from '../../utils/redux/types';

const RenterStyle = css`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLoginRedirectTo: actionCreator(dispatch, ActionTypes.UPDATE_LOGIN_REDIRECT_TO),
  setLeaseAgreementRedirectTo: actionCreator(
    dispatch,
    ActionTypes.UPDATE_LEASE_AGREEMENT_REDIRECT_TO
  ),
  setPaymentRedirectTo: actionCreator(dispatch, ActionTypes.UPDATE_PAYMENT_REDIRECT_TO),
});

type Props = ConnectedProps<undefined, typeof mapDispatchToProps>;

const Renter: FC<Props> = ({
  setLoginRedirectTo,
  setLeaseAgreementRedirectTo,
  setPaymentRedirectTo,
}) => {
  return (
    <div css={RenterStyle}>
      <h1>Renter</h1>
      <Link href="/login-register">
        <a
          onClick={() => {
            setLoginRedirectTo('/renter');
          }}
        >
          login/register
        </a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <Link href="/message">
        <a>Message</a>
      </Link>
      <Link href="/payment">
        <a
          onClick={() => {
            setPaymentRedirectTo('/renter');
          }}
        >
          Payment
        </a>
      </Link>
      <Link href="/lease-agreement">
        <a
          onClick={() => {
            setLeaseAgreementRedirectTo('/renter');
          }}
        >
          Lease Agreement
        </a>
      </Link>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
    </div>
  );
};

export default connect(undefined, mapDispatchToProps)(Renter);
