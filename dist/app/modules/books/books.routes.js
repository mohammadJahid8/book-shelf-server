"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const books_cotroller_1 = require("./books.cotroller");
const router = express_1.default.Router();
router.get('/:id', books_cotroller_1.BooksController.getSingleBook);
router.post('/', (0, auth_1.default)(), books_cotroller_1.BooksController.createBook);
router.get('/', books_cotroller_1.BooksController.getAllBooks);
router.patch('/:id', (0, auth_1.default)(), books_cotroller_1.BooksController.updateBook);
router.delete('/:id', (0, auth_1.default)(), books_cotroller_1.BooksController.deleteBook);
exports.BookRoutes = router;
