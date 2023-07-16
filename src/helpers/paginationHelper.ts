import { SortOrder } from 'mongoose';

type IOptions = {
  page?: number;
  limit?: number;
  sortby?: string;
  sortorder?: SortOrder;
  minprice?: number;
  maxprice?: number;
  location?: string;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortby: string;
  sortorder: SortOrder;
  minprice?: number;
  maxprice?: number;
  location?: string;
};

const calculatePagination = (options: IOptions): IOptionsResult => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;

  const sortby = options.sortby || 'createdAt';
  const sortorder = options.sortorder || 'desc';
  const minprice = Number(options.minprice) || 0;
  const maxprice = Number(options.maxprice) || 0;
  const location = options.location || '';

  return {
    page,
    limit,
    skip,
    sortby,
    sortorder,
    minprice,
    maxprice,
    location,
  };
};

export const PaginationHelper = {
  calculatePagination,
};
