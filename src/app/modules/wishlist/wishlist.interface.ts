import { Model, Types } from 'mongoose';
import { IBook } from '../books/books.interface';

type IReadingStatus = 'reading' | 'finished';

export const readingStatus: IReadingStatus[] = ['reading', 'finished'];

export type IWishlist = {
  book: Types.ObjectId | IBook;
  isReading: boolean;
  userEmail: string;
  readingStatus: IReadingStatus;
};

export type WishListModel = Model<IWishlist, Record<string, unknown>>;
