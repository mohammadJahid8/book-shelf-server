import { Model } from 'mongoose';
import { IUser } from '../users/users.interface';

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  authorEmail: string | IUser;
  reviews: string[];
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
  searchterm?: string;
};
