"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const books_constants_1 = require("./books.constants");
const books_model_1 = require("./books.model");
const createBook = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.create(authUser);
    return result;
});
const getAllBooks = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchterm } = filters;
    const { page, limit, skip, sortby, sortorder } = paginationHelper_1.PaginationHelper.calculatePagination(paginationOptions);
    const andCondition = [];
    if (searchterm) {
        andCondition.push({
            $or: books_constants_1.BookSearchableFields.map(field => ({
                [field]: {
                    $regex: searchterm,
                    $options: 'i',
                },
            })),
        });
    }
    const sortCondition = {};
    if (sortby && sortorder) {
        sortCondition[sortby] = sortorder;
    }
    const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};
    const total = yield books_model_1.Book.countDocuments(whereCondition);
    const result = yield books_model_1.Book.find(whereCondition)
        .sort(sortCondition)
        .skip(skip)
        .limit(limit || total);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.findById(id);
    return result;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield books_model_1.Book.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Book not found');
    }
    const updateBookData = payload;
    const result = yield books_model_1.Book.findOneAndUpdate({
        _id: id,
    }, updateBookData, {
        new: true,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.findByIdAndDelete(id);
    return result;
});
exports.BookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
