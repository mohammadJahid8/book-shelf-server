import express from 'express';
import auth from '../../middlewares/auth';
import { BooksController } from './books.cotroller';
const router = express.Router();

router.get('/:id', BooksController.getSingleBook);
router.post('/', auth(), BooksController.createBook);
router.get('/', BooksController.getAllBooks);
router.patch('/:id', auth(), BooksController.updateBook);
router.delete('/:id', auth(), BooksController.deleteBook);

export const BookRoutes = router;
