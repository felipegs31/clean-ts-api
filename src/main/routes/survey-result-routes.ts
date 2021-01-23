import { makeSaveSurveyResultController } from './../factories/controllers/survey-result/save-survey-result/save-survey-result-controller-factory'
import { auth } from '../midlewares/auth'
import { adaptRoute } from '../adapter/express-route-adapter'
import { Router } from 'express'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
}
