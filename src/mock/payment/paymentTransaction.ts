import { Decimal } from 'decimal.js';
import moment from 'moment-timezone';
import { PaymentTransaction } from '../../redux/reducers/types';

const paymentTransactions: { [key in number]: PaymentTransaction } = {};

paymentTransactions[1] = {
  id: 1,
  amount: new Decimal(1990),
  toPaymentAccountId: 2,
  fromPaymentAccountId: 1,
  timeStamp: moment.tz('2019-06-01 12:00', 'America/Los_Angeles'),
  description: '1st Month Rent',
  relatedPropertyId: 1,
};

paymentTransactions[2] = {
  id: 2,
  amount: new Decimal(1988),
  toPaymentAccountId: 2,
  fromPaymentAccountId: 1,
  timeStamp: moment.tz('2019-07-01 12:00', 'America/Los_Angeles'),
  description: '2nd Month Rent',
};

paymentTransactions[3] = {
  id: 3,
  amount: new Decimal(2000),
  toPaymentAccountId: 2,
  fromPaymentAccountId: 1,
  timeStamp: moment.tz('2009-6-18 12:00', 'America/Los_Angeles'),
  relatedPropertyId: 1,
};

paymentTransactions[4] = {
  id: 4,
  amount: new Decimal(2005),
  toPaymentAccountId: 2,
  fromPaymentAccountId: 1,
  timeStamp: moment.tz('2020-01-05 12:00', 'America/Los_Angeles'),
};

export default paymentTransactions;
