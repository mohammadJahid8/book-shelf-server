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

export const WishlistService = {
  addBook,
  getWishlistByToken,
};
