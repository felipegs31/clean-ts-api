import { AddSurvey } from './../../../../domain/usecases/add-survey'
import { badRequest } from './../../../helper/http/http-helper'
import { Validation } from './../../../protocols/validation'
import { HttpRequest, HttpResponse } from './../../../protocols/http'
import { Controller } from './../../../protocols/controller'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }

    const { question, answers } = httpRequest.body
    await this.addSurvey.add({
      question,
      answers
    })

    return null
  }
}
