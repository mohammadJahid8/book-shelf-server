import express from 'express';
import auth from '../../middlewares/auth';
import { UserController } from './users.controller';

const router = express.Router();

router.get('/my-profile', auth(), UserController.getMyProfile);
router.patch('/my-profile', auth(), UserController.updateMyProfile);
router.get('/:id', auth(), UserController.getSingleUser);
router.patch('/:id', auth(), UserController.updateUser);
router.delete('/:id', auth(), UserController.deleteUser);
router.get('/', auth(), UserController.getAllUsers);

export const UserRoutes = router;
