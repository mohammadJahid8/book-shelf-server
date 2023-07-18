import express from 'express';
import auth from '../../middlewares/auth';
import { UserController } from './users.controller';

const router = express.Router();

router.get('/my-profile', auth(), UserController.getMyProfile);

router.get('/:id', auth(), UserController.getSingleUser);

router.delete('/:id', auth(), UserController.deleteUser);
router.get('/', auth(), UserController.getAllUsers);

export const UserRoutes = router;
