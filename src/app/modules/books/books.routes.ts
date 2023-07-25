import express from 'express';
import { BooksController } from './books.cotroller';
const router = express.Router();

router.get('/:id', BooksController.getSingleBook);
router.post('/', BooksController.createBook);
router.get('/', BooksController.getAllBooks);
router.patch('/:id', BooksController.updateBook);
router.delete('/:id', BooksController.deleteBook);
router.patch('/review/:id', BooksController.addReview);

export const BookRoutes = router;
