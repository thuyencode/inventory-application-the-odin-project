import { HttpStatus, httpStatusTextByCode } from 'http-status-ts'
import HttpError from './HttpError.js'

/**
 * Bad Request error
 *
 * @class BadRequest
 * @typedef {BadRequest}
 * @extends {HttpError}
 */
class BadRequest extends HttpError {
  constructor(cause: Error | string) {
    super(httpStatusTextByCode(HttpStatus.BAD_REQUEST), HttpStatus.BAD_REQUEST)
    super.cause = cause
  }
}

export default BadRequest
