import { ObjectId } from 'mongoose';
import { RoleEnum } from '~~/enum/role.enum';

export interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
  role: [RoleEnum];
}
export interface IUserResponse {
  access_token: string;
  user: Omit<IUser, 'password'>;
  success: boolean;
}

export interface IUserCredential {
  email: string;
  password: string;
}
