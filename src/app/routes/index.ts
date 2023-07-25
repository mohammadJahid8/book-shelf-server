import express from 'express';
import { AuthUserRoutes } from '../modules/auth/auth.routes';
import { BookRoutes } from '../modules/books/books.routes';
import { UserRoutes } from '../modules/users/users.routes';
import { WishlistRoutes } from '../modules/wishlist/wishlist.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthUserRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/wishlist',
    route: WishlistRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
