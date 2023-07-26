"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const wishlist_controller_1 = require("./wishlist.controller");
const router = express_1.default.Router();
router.post('/', wishlist_controller_1.WishlistController.addBook);
router.get('/', (0, auth_1.default)(), wishlist_controller_1.WishlistController.getWishlistByToken);
router.patch('/:id', (0, auth_1.default)(), wishlist_controller_1.WishlistController.updateBook);
exports.WishlistRoutes = router;
