/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { PaginationHelper } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';

import { BookSearchableFields } from './books.constants';
import { IBook, IBookFilters } from './books.interface';
import { Book } from './books.model';

const createBook = async (authUser: IBook): Promise<IBook | null> => {
  const result = await Book.create(authUser);
  return result;
};

const getAllBooks = async (
  filters: IBookFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchterm } = filters;
  const { page, limit, skip, sortby, sortorder } =
    PaginationHelper.calculatePagination(paginationOptions);

  const andCondition = [];

  if (searchterm) {
    andCondition.push({
      $or: BookSearchableFields.map(field => ({
        [field]: {
          $regex: searchterm,
          $options: 'i',
        },
      })),
    });
  }

  const sortCondition: { [key: string]: SortOrder } = {};

  if (sortby && sortorder) {
    sortCondition[sortby] = sortorder;
  }

  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};
  const total = await Book.countDocuments(whereCondition);

  const result = await Book.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit || total);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);

  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const isExist = await Book.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Book not found');
  }

  const updateBookData: Partial<IBook> = payload;

  const result = await Book.findOneAndUpdate(
    {
      _id: id,
    },
    updateBookData,
    {
      new: true,
    }
  );

  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
