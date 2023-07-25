import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './books.interface';

const BookModel = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },

    reviews: {
      type: [String],
      default: [],
    },

    publicationDate: {
      type: String,
      required: true,
    },

    authorEmail: {
      type: String,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook, BookModel>('Book', BookModel);
