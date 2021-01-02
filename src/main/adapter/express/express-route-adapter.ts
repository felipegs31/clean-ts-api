import { HttpRequest } from '../../../presentation/protocols/http'
import { Controller } from '../../../presentation/protocols/controller'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResquest: HttpRequest = {
      body: req.body
    }
    const httpReponse = await controller.handle(httpResquest)
    if (httpReponse.statusCode >= 200 || httpReponse.statusCode <= 299) {
      res.status(httpReponse.statusCode).json(httpReponse.body)
    } else {
      res.status(httpReponse.statusCode).json({
        error: httpReponse.body.message
      })
    }
  }
}
