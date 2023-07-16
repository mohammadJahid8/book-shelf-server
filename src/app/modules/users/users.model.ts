import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config';

import { IUser, UserModel } from './users.interface';

const UserSchema = new Schema<IUser>(
  {
    password: {
      type: String,
      required: true,
      select: 0,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.index({ email: 1 }, { unique: true });

UserSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<IUser, 'email' | 'password'> | null> {
  const user = await User.findOne(
    { email },
    { email: 1, password: 1, role: 1 }
  ).lean();

  return user;
};

UserSchema.statics.isPasswordMatch = async function (
  givenPass: string,
  savedPass
): Promise<boolean> {
  const isMatch = await bcrypt.compare(givenPass, savedPass);
  return isMatch;
};

UserSchema.pre('save', async function (next) {
  if (!this.password) {
    return next();
  }

  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>('User', UserSchema);
