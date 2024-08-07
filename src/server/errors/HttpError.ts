import { HttpStatus } from 'http-status-ts'

/**
 * Custom HTTP error extends from this class
 *
 * @class HttpError
 * @typedef {HttpError}
 * @extends {Error}
 */
class HttpError extends Error {
  statusCode: HttpStatus
  cause: Error | string | unknown

  /**
   * Creates an instance of HttpError.
   *
   * @constructor
   * @param {string} message
   * @param {number} statusCode
   */
  constructor(
    message: string,
    statusCode: HttpStatus,
    cause?: Error | string | unknown
  ) {
    super(message)
    this.statusCode = statusCode
    this.cause = cause
  }
}

export default HttpError
