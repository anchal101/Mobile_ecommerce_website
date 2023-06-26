const Exception = require('./exception')
const { ERROR_TYPE } = require('./constants')

export default {
  internalServerError(msg: any, err: any) {
    return new Exception(
      ERROR_TYPE.INTERNAL,
      msg || 'Internal server error, Please try after some time.',
      err,
    )
  },
  badRequestError(msg: any, err: any) {
    return new Exception(ERROR_TYPE.BAD_REQUEST, msg || 'Bad request', err)
  },
  unAuthenticatedAccess(msg: any, err: any) {
    return new Exception(
      ERROR_TYPE.UNAUTHORIZED,
      msg || 'Unauthorized access',
      err,
    )
  },
  forbiddenAccess(msg: any, err: any) {
    return new Exception(
      ERROR_TYPE.FORBIDDEN,
      msg || 'Forbidden access',
      err,
    )
  },
  notFoundError(msg: any, err: any) {
    return new Exception(ERROR_TYPE.NOT_FOUND, msg || 'No route found', err)
  },
  notAllowedError(msg: any, err: any) {
    return new Exception(
      ERROR_TYPE.NOT_ALLOWED,
      msg || 'Method not allowed',
      err,
    )
  },
  alreadyExistError(msg: any, err: any) {
    return new Exception(
      ERROR_TYPE.ALREADY_EXISTS,
      msg || 'Already Exists',
      err,
    )
  },
}
