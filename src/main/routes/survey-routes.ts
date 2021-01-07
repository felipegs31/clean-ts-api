import { auth } from './../midlewares/auth'
import { adminAuth } from './../midlewares/admin-auth'
import { makeLoadSurveysController } from './../factories/controllers/survey/load-surveys/load-surveys-controller-factory'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { adaptRoute } from '../adapter/express-route-adapter'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
