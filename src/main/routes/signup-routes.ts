import { adaptRoute } from './../adapter/express-route-adapter'
import { makeSignUpController } from '../factories/signup/signup-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
