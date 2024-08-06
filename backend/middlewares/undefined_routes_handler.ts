import { MethodNotAllowed, NotFound } from '@backend/errors'
import type e from 'express'
import { HttpMethod } from 'http-status-ts'

function undefined_routes_handler(
  req: e.Request,
  res: e.Response,
  next: e.NextFunction
) {
  if (req.method !== HttpMethod.GET) {
    return next(new MethodNotAllowed())
  }

  next(new NotFound())
}

export default undefined_routes_handler
