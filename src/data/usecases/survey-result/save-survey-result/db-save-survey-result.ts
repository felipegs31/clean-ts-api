import { SurveyResultModel } from '../../../../domain/models/survey-result'
import { SaveSurveyResultRepository } from '../../../protocols/db/survey-result/save-survey-result-repository'
import { SaveSurveyResult, SaveSurveyResultModel } from '../../../../domain/usecases/survey-result/save-survey-result'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly saveSurveyResultRepository: SaveSurveyResultRepository
  ) {}

  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    const surveyResult = await this.saveSurveyResultRepository.save(data)
    return surveyResult
  }
}
