import { Middleware } from './../../presentation/protocols/middleware'
import { HttpRequest } from '../../presentation/protocols/http'
import { NextFunction, Request, Response } from 'express'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpResquest: HttpRequest = {
      headers: req.headers
    }
    const httpReponse = await middleware.handle(httpResquest)
    if (httpReponse.statusCode === 200) {
      Object.assign(req, httpReponse.body)
      next()
    } else {
      res.status(httpReponse.statusCode).json({
        error: httpReponse.body.message
      })
    }
  }
}
