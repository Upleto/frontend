import { UserProfile, Picture, Renter } from '../../redux/reducers/types';
import account1 from '../account/account1';

export const profilePic1: Picture = {
  id: 1,
  altInfo: 'user 1 profile pic',
};

const profile1: UserProfile = {
  firstName: 'User',
  lastName: 'One',
  displayName: 'user1',
  accountIds: [account1],
  profilePicId: profilePic1.id,
};

const user1: Renter = {
  id: 1,
  account: 'user1@gmail.com',
  profile: profile1,
  rental: [],
  paymentHistory: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
};

export default user1;
