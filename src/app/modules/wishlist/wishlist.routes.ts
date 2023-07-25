import express from 'express';
import auth from '../../middlewares/auth';
import { WishlistController } from './wishlist.controller';

const router = express.Router();

router.post('/', WishlistController.addBook);
router.get('/', auth(), WishlistController.getWishlistByToken);

export const WishlistRoutes = router;
