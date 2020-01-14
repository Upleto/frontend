import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RenterPlusLoginState } from '../../redux/reducers/reducerCombo';
import { ConnectedProps } from '../../utils/redux/types';
import Link from '../Link';

const mapStateToProps = (state: RenterPlusLoginState) => ({
  redirectTo: state?.payment?.redirectTo ?? '',
});

type Props = ConnectedProps<typeof mapStateToProps>;

const LeaseAgreement: FC<Props> = ({ redirectTo }) => {
  return (
    <div>
      <h2>Payment</h2>
      <Link href={redirectTo}>
        <a>back</a>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps)(LeaseAgreement);
