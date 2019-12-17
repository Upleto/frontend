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
  setRedirectTo: actionCreator(dispatch, ActionTypes.UPDATE_REDIRECT_TO),
});

type Props = ConnectedProps<undefined, typeof mapDispatchToProps>;

const Renter: FC<Props> = ({ setRedirectTo }) => {
  return (
    <div css={RenterStyle}>
      <h1>Renter</h1>
      <Link href="/login-register">
        <a
          onClick={() => {
            setRedirectTo('/renter');
          }}
        >
          login/register
        </a>
      </Link>
    </div>
  );
};

export default connect(undefined, mapDispatchToProps)(Renter);
