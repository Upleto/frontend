import { Decimal } from 'decimal.js';
import { Moment } from 'moment-timezone';

export interface User {
  id: number;
  account: string;
  profile: UserProfile;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  displayName: string;
  bio?: string;
  accounts: PaymentAccounts;
  profilePic?: Picture;
}

export interface Picture {
  id: number;
  altInfo?: string;
  url?: string;
}

export interface Property {
  landlordId: number;
  displayName: string;
  id: number;
  description?: string;
  pricings: PropertyPricings;
  availability: availabilities;
  bookings: Bookings;
}

export type Properties = { id: Property['id'] }[];

export interface PropertyPricing {
  id: number;
  ratePerDay?: Decimal;
  ratePerMonth?: Decimal;
  period: Period;
}

export type PropertyPricings = { id: PropertyPricing['id'] }[];

export interface Period {
  fromTime: Moment;
  toTime: Moment;
}

export interface Availability {
  id: number;
  period: Period;
  available: boolean;
}

export type availabilities = { id: Availability['id'] }[];

export interface PaymentAccount {
  id: number;
  ownerId: number;
  balance?: Decimal;
  relatedBookings?: Bookings;
}

export type PaymentAccounts = { id: PaymentAccount['id'] }[];

export interface PaymentTransaction {
  id: number;
  amount: Decimal;
  toPaymentAccountId: PaymentAccount['id'];
  fromPaymentAccountId: PaymentAccount['id'];
  time: Moment;
  description?: string;
  relatedPropertyId?: Property['id'];
}

export type PaymentTransactions = { id: PaymentTransaction['id'] }[];

export interface Booking {
  id: number;
  period: Period;
  propertyId: Property['id'];
  renterId: Renter['id'];
  landlordId: Landlord['id'];
  agreements: Agreements;
}

export type Bookings = { id: Booking['id'] }[];

export interface Agreement {
  id: number;
  landlordId: Landlord['id'];
  renterId: Renter['id'];
  period: Period;
  dateSigned: Moment;
  docLink: string;
}

export type Agreements = { id: Agreement['id'] }[];

export interface Renter extends User {
  rental: Bookings;
  paymentHistory: PaymentTransactions;
}

export interface Landlord extends User {
  ownedProperties: Properties;
  paymentHistory: PaymentTransactions;
}
