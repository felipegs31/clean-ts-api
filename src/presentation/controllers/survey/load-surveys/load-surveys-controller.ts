import { ok } from './../../../helper/http/http-helper'
import { LoadSurveys } from '../../../../domain/usecases/survey/load-surveys'
import { serverError, noContent } from '../../../helper/http/http-helper'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Controller } from '../../../protocols/controller'

export class LoadSurveysController implements Controller {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      return surveys.length ? ok(surveys) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
