import { HttpRequest } from './../../presentation/protocols/http'
import { Controller } from './../../presentation/protocols/controller'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResquest: HttpRequest = {
      body: req.body
    }
    const httpReponse = await controller.handle(httpResquest)
    res.status(httpReponse.statusCode).json(httpReponse.body)
  }
}
