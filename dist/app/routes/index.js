"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const books_routes_1 = require("../modules/books/books.routes");
const users_routes_1 = require("../modules/users/users.routes");
const wishlist_routes_1 = require("../modules/wishlist/wishlist.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_routes_1.AuthUserRoutes,
    },
    {
        path: '/users',
        route: users_routes_1.UserRoutes,
    },
    {
        path: '/books',
        route: books_routes_1.BookRoutes,
    },
    {
        path: '/wishlist',
        route: wishlist_routes_1.WishlistRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
