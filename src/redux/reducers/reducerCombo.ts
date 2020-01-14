import renter, { State as RenterState } from './renter';
import loginRegister, { State as LoginRegisterState } from './loginRegister';
import leaseAgreement, { State as LeaseAgreementState } from './leaseAgreement';

export interface RenterPlusLoginState {
  renter: RenterState;
  loginRegister: LoginRegisterState;
  leaseAgreement: LeaseAgreementState;
}

export const renterPlusLoginReducers = {
  renter,
  loginRegister,
  leaseAgreement,
};
