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
  accountIds: PaymentAccountIds;
  profilePicId?: Picture['id'];
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
  pricingIds: PropertyPricingIds;
  availabilityIds: AvailabilityIds;
  bookingIds: BookingIds;
}

export type PropertyIds = { id: Property['id'] }[];

export interface PropertyPricing {
  id: number;
  ratePerDay?: Decimal;
  ratePerMonth?: Decimal;
  period: Period;
}

export type PropertyPricingIds = { id: PropertyPricing['id'] }[];

export interface Period {
  fromTime: Moment;
  toTime: Moment;
}

export interface Availability {
  id: number;
  period: Period;
  available: boolean;
}

export type AvailabilityIds = { id: Availability['id'] }[];

export interface PaymentAccount {
  id: number;
  ownerId: number;
  balance?: Decimal;
  relatedBookingIds?: BookingIds;
}

export type PaymentAccountIds = { id: PaymentAccount['id'] }[];

export interface PaymentAccountForDisplay extends Pick<PaymentAccount, 'id' | 'ownerId'> {
  displayName: string;
}

export interface PaymentAccountForDisplayObjs {
  [key: number]: PaymentAccountForDisplay;
}

export interface PaymentTransaction {
  id: number;
  amount: Decimal;
  toPaymentAccountId: PaymentAccount['id'];
  fromPaymentAccountId: PaymentAccount['id'];
  timeStamp: Moment;
  description?: string;
  relatedPropertyId?: Property['id'];
}

export interface PaymentTransactionObjs {
  [key: number]: PaymentTransaction;
}

export type PaymentTransactionIds = { id: PaymentTransaction['id'] }[];

export interface Booking {
  id: number;
  period: Period;
  propertyId: Property['id'];
  renterId: Renter['id'];
  landlordId: Landlord['id'];
  agreementIds: AgreementIds;
}

export type BookingIds = { id: Booking['id'] }[];

export interface Agreement {
  id: number;
  landlordId: Landlord['id'];
  renterId: Renter['id'];
  period: Period;
  dateSigned: Moment;
  docLink: string;
}

export type AgreementIds = { id: Agreement['id'] }[];

export interface Renter extends User {
  rental: BookingIds;
  paymentHistory: PaymentTransactionIds;
}

export interface Landlord extends User {
  ownedPropertyIds: PropertyIds;
  paymentHistory: PaymentTransactionIds;
}
