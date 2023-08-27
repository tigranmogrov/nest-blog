import { IUser } from '~~/types/user';

export const authUserResponse = (user: IUser): Omit<IUser, 'password'> => {
  return {
    _id: user._id,
    email: user.email,
    role: user.role,
  };
};
