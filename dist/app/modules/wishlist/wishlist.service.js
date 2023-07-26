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
exports.WishlistService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const wishlist_model_1 = require("./wishlist.model");
const addBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_model_1.Wishlist.create(payload);
    return result;
});
const getWishlistByToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_model_1.Wishlist.find({
        userEmail: email,
    }).populate('book');
    return result;
});
const updateBook = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const isExist = yield wishlist_model_1.Wishlist.findById(id);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Wishlist not found');
    }
    const updateUserData = Object.assign({}, updatedData);
    Object.keys(updateUserData).forEach(key => {
        isExist[key] = updateUserData[key];
    });
    const result = yield isExist.save();
    return result;
});
exports.WishlistService = {
    addBook,
    getWishlistByToken,
    updateBook,
};
