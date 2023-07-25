import { Model, Types } from 'mongoose';
import { IBook } from '../books/books.interface';
export type IWishlist = {
  book: Types.ObjectId | IBook;

  userEmail: string;
};

export type WishListModel = Model<IWishlist, Record<string, unknown>>;
