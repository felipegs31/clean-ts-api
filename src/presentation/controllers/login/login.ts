import { Validation } from '../../protocols/validation'
import { Authentication } from './../../../domain/usecases/authentication'
import { badRequest, serverError, unauthorized, ok } from './../../helper/http/http-helper'
import { HttpRequest, HttpResponse } from './../../protocols/http'
import { Controller } from './../../protocols/controller'

export class LoginController implements Controller {
  private readonly authentication: Authentication
  private readonly validation: Validation

  constructor (
    authentication: Authentication,
    validation: Validation
  ) {
    this.authentication = authentication
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { email, password } = httpRequest.body
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
