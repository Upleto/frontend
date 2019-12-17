import renter, { State as RenterState } from './renter';
import loginRegister, { State as LoginRegisterState } from './loginRegister';

export interface RenterPlusLoginState {
  renter: RenterState;
  loginRegister: LoginRegisterState;
}

export const renterPlusLoginReducers = {
  renter,
  loginRegister,
};
