import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { WishlistService } from './wishlist.service';

const addBook = catchAsync(async (req: Request, res: Response) => {
  const result = await WishlistService.addBook(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added to wishlist successfully!',
    data: result,
  });
});

const getWishlistByToken = catchAsync(async (req: Request, res: Response) => {
  const result = await WishlistService.getWishlistByToken(req?.user?.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wishlist got successfully!',
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  console.log('req.params.id', req.params);

  const result = await WishlistService.updateBook(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wishlist updated successfully!',
    data: result,
  });
});

export const WishlistController = {
  addBook,
  getWishlistByToken,
  updateBook,
};
