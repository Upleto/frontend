import { Decimal } from 'decimal.js';
import { PaymentAccount } from '../../redux/reducers/types';

const account1: PaymentAccount = {
  id: 1,
  ownerId: 1,
  balance: new Decimal(200),
};

export default account1;
