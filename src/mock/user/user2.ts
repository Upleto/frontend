import { UserProfile, Picture, Landlord } from '../../redux/reducers/types';

const profilePic2: Picture = {
  id: 2,
  altInfo: 'user 1 profile pic',
};

const profile2: UserProfile = {
  firstName: 'User',
  lastName: 'Two',
  displayName: 'user2',
  accounts: [{ id: 2 }],
  profilePic: profilePic2,
};

const user2: Landlord = {
  id: 1,
  account: 'user2@gmail.com',
  profile: profile2,
  ownedProperties: [{ id: 1 }],
  paymentHistory: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
};

export default user2;
