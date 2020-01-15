import { Decimal } from 'decimal.js';
import moment from 'moment-timezone';
import { PaymentTransaction } from '../../redux/reducers/types';

export const paymentTransaction1: PaymentTransaction = {
  id: 1,
  amount: new Decimal(2000),
  toPaymentAccountId: 2,
  fromPaymentAccountId: 1,
  time: moment.tz('2019-06-01 12:00', 'America/Los_Angeles'),
  description: '1st Month Rent',
  relatedPropertyId: 1,
};

export const paymentTransaction2: PaymentTransaction = {
  id: 2,
  amount: new Decimal(2000),
  toPaymentAccountId: 2,
  fromPaymentAccountId: 1,
  time: moment.tz('2019-07-01 12:00', 'America/Los_Angeles'),
  description: '2nd Month Rent',
};

export const paymentTransaction3: PaymentTransaction = {
  id: 3,
  amount: new Decimal(2000),
  toPaymentAccountId: 2,
  fromPaymentAccountId: 1,
  time: moment.tz('2019-08-01 12:00', 'America/Los_Angeles'),
  relatedPropertyId: 1,
};

export const paymentTransaction4: PaymentTransaction = {
  id: 4,
  amount: new Decimal(2000),
  toPaymentAccountId: 2,
  fromPaymentAccountId: 1,
  time: moment.tz('2019-09-01 12:00', 'America/Los_Angeles'),
};
