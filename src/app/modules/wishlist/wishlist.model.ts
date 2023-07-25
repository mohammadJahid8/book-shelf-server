import { Schema, model } from 'mongoose';
import { IWishlist, WishListModel } from './wishlist.interface';

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
