"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const mongoose_1 = require("mongoose");
const wishlist_interface_1 = require("./wishlist.interface");
const WishListModel = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        enum: wishlist_interface_1.readingStatus,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Wishlist = (0, mongoose_1.model)('Wishlist', WishListModel);
