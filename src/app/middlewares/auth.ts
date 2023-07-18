import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';

import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';
import { User } from '../modules/users/users.model';

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get auth token
    const token = req.headers.authorization;
    if (!token)
      throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    // check if token is valid
    let verifiedUser = null;

    verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

    const isUserExist = await User.isUserExist(verifiedUser.email);

    if (!isUserExist) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'You are not a verified user'
      );
    }

    req.user = verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
