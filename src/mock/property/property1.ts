import { Decimal } from 'decimal.js';
import moment from 'moment-timezone';
import {
  Property,
  PropertyPricing,
  Availability,
  Booking,
  Agreement,
} from '../../redux/reducers/types';

export const period1 = {
  fromTime: moment.tz('2019-06-01 12:00', 'America/Los_Angeles'),
  toTime: moment.tz('2020-06-01 12:00', 'America/Los_Angeles'),
};

export const period2 = {
  fromTime: moment.tz('2019-06-01 12:00', 'America/Los_Angeles'),
  toTime: moment.tz('2020-06-01 12:00', 'America/Los_Angeles'),
};

export const pricing1: PropertyPricing = {
  id: 1,
  ratePerDay: new Decimal(2000 / 30),
  period: period1,
};

export const availability1: Availability = {
  id: 1,
  period: period1,
  available: false,
};

export const availability2: Availability = {
  id: 2,
  period: period2,
  available: true,
};

export const agreement1: Agreement = {
  id: 1,
  period: period1,
  dateSigned: moment.tz('2019-05-20 12:00', 'America/Los_Angeles'),
  landlordId: 2,
  renterId: 1,
  docLink: 'example doc',
};

export const booking1: Booking = {
  id: 1,
  period: period1,
  propertyId: 1,
  renterId: 1,
  landlordId: 2,
  agreementIds: [{ id: 1 }],
};

const property1: Property = {
  id: 1,
  landlordId: 1,
  displayName: 'Room 1',
  pricingIds: [{ id: 1 }],
  description: 'this is the example listing room 1',
  availabilityIds: [{ id: 1 }, { id: 2 }],
  bookingIds: [{ id: 1 }],
};

export default property1;
