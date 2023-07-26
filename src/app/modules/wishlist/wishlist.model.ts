import { Schema, model } from 'mongoose';
import { IWishlist, WishListModel, readingStatus } from './wishlist.interface';

const WishListModel = new Schema<IWishlist>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },

    userEmail: {
      type: String,
      required: true,
    },
    isReading: {
      type: Boolean,
      default: false,
    },
    readingStatus: {
      type: String,
      enum: readingStatus,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Wishlist = model<IWishlist, WishListModel>(
  'Wishlist',
  WishListModel
);
