import { SortOrder } from 'mongoose';

type IOptions = {
  page?: number;
  limit?: number;
  sortby?: string;
  sortorder?: SortOrder;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortby: string;
  sortorder: SortOrder;
};

const calculatePagination = (options: IOptions): IOptionsResult => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;

  const sortby = options.sortby || 'createdAt';
  const sortorder = options.sortorder || 'desc';

  return {
    page,
    limit,
    skip,
    sortby,
    sortorder,
  };
};

export const PaginationHelper = {
  calculatePagination,
};
