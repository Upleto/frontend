import renter, { State as RenterState } from './renter';
import loginRegister, { State as LoginRegisterState } from './loginRegister';
import leaseAgreement, { State as LeaseAgreementState } from './leaseAgreement';
import payment, { State as PaymentState } from './payment';

export interface RenterPlusLoginState {
  renter: RenterState;
  loginRegister: LoginRegisterState;
  leaseAgreement: LeaseAgreementState;
  payment: PaymentState;
}

export const renterPlusLoginReducers = {
  renter,
  loginRegister,
  leaseAgreement,
  payment,
};
