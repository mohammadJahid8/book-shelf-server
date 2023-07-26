"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_cotroller_1 = require("./books.cotroller");
const router = express_1.default.Router();
router.get('/:id', books_cotroller_1.BooksController.getSingleBook);
router.post('/', books_cotroller_1.BooksController.createBook);
router.get('/', books_cotroller_1.BooksController.getAllBooks);
router.patch('/:id', books_cotroller_1.BooksController.updateBook);
router.delete('/:id', books_cotroller_1.BooksController.deleteBook);
router.patch('/review/:id', books_cotroller_1.BooksController.addReview);
exports.BookRoutes = router;
