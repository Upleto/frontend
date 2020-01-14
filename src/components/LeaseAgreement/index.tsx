import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RenterPlusLoginState } from '../../redux/reducers/reducerCombo';
import { ConnectedProps } from '../../utils/redux/types';
import Link from '../Link';

const mapStateToProps = (state: RenterPlusLoginState) => ({
  redirectTo: state?.leaseAgreement?.redirectTo ?? '',
  leaseAgreementLink: state?.leaseAgreement?.leaseAgreementLink ?? '',
});

type Props = ConnectedProps<typeof mapStateToProps>;

const LeaseAgreement: FC<Props> = ({ redirectTo, leaseAgreementLink }) => {
  return (
    <div>
      <h2>Lease Agreement</h2>
      <a href={leaseAgreementLink}>Link to LeaseAgreement, will change to embedded window</a>
      <Link href={redirectTo}>
        <a>back</a>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps)(LeaseAgreement);
