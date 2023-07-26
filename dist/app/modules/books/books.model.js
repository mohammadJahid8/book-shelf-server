"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const BookModel = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Book = (0, mongoose_1.model)('Book', BookModel);
