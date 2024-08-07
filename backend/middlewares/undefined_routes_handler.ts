import { MethodNotAllowed } from '@backend/errors'
import { getPublicPath } from '@shared/libs/utils'
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

  res.sendFile(getPublicPath('index.html'))
}

export default undefined_routes_handler
