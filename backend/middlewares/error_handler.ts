/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpError, InternalServerError, NotFound } from '@backend/errors'
import type e from 'express'

function error_handler(
  err: unknown,
  req: e.Request,
  res: e.Response,
  next: e.NextFunction
) {
  try {
    if (err instanceof NotFound) {
      res.status(err.statusCode).render('404', {
        title: 'Not Found',
        navigation: {
          href: '/',
          name: 'Home',
          icon_name: 'mdi:home'
        }
      })
      return
    }

    if (err instanceof HttpError) {
      if (err instanceof InternalServerError) {
        console.error(err)
      }

      res.status(err.statusCode).json({
        error: {
          statusCode: err.statusCode,
          message: err.message,
          cause: err.cause
        }
      })
    } else {
      throw new InternalServerError(err)
    }
  } catch (err) {
    if (err instanceof InternalServerError) {
      console.log(err)

      res.status(err.statusCode).json({
        error: {
          statusCode: err.statusCode,
          message: err.message,
          cause: err.cause
        }
      })
    }
  }
}

export default error_handler
