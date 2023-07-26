import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IWishlist } from './wishlist.interface';
import { Wishlist } from './wishlist.model';

const addBook = async (payload: IWishlist): Promise<any> => {
  const result = await Wishlist.create(payload);
  return result;
};

const getWishlistByToken = async (email: string): Promise<any> => {
  const result = await Wishlist.find({
    userEmail: email,
  }).populate('book');
  return result;
};

const updateBook = async (
  id: string,
  updatedData: Partial<IWishlist>
): Promise<IWishlist | null> => {
  console.log(id);

  const isExist = await Wishlist.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Wishlist not found');
  }

  const updateUserData: Partial<IWishlist> = { ...updatedData };

  Object.keys(updateUserData).forEach(key => {
    (isExist as any)[key] = (updateUserData as any)[key];
  });

  const result = await isExist.save();

  return result;
};

export const WishlistService = {
  addBook,
  getWishlistByToken,
  updateBook,
};
