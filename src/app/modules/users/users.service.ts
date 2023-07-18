/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { IUser } from './users.interface';
import { User } from './users.model';

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find({});

  return result;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);

  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);

  return result;
};

const getMyProfile = async (
  payload: Record<string, unknown>
): Promise<IUser | null> => {
  const result = await User.findById(payload.id);

  return result;
};

export const UsersService = {
  getAllUsers,
  getSingleUser,

  deleteUser,
  getMyProfile,
};
