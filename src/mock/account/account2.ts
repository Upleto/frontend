import { Decimal } from 'decimal.js';
import { PaymentAccount } from '../../redux/reducers/types';

const account2: PaymentAccount = {
  id: 2,
  ownerId: 2,
  balance: new Decimal(400),
};

export default account2;
