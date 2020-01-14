import { Decimal } from 'decimal.js';

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
  accounts: PaymentAccount[];
}

export interface Property {
  ownerId: number;
  displayName: string;
  id: number;
  description?: string;
  pricing: Pricing;
  availability: Availability[];
  booking: Booking[];
}

export interface Pricing {
  ratePerDay: Decimal;
}

export interface Availability {
  fromTime: string;
  toTime: string;
  available: boolean;
}

export interface PaymentAccount {
  id: number;
  ownerId: number;
  balance?: Decimal;
  relatedProperty?: Property;
}

export interface PaymentTransaction {
  amount: Decimal;
  to: PaymentAccount;
  from: PaymentAccount;
  description?: string;
  relatedProperty?: Property;
}

export interface Booking {
  fromTime: string;
  toTime: string;
  property: Property;
  renter: User;
  owner: User;
  agreement: Agreement;
}

export interface Agreement {
  owner: User;
  renter: User;
  fromTime: string;
  toTime: string;
  dateSigned: string;
  docLink: string;
}
