import { Schema, model } from 'mongoose';
import { IUser } from '~~/types/user';

const userSchema = new Schema<IUser>(
  {
    _id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);
