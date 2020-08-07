import { cors } from './../midlewares/cors'
import { bodyParser } from './../midlewares/body-parser'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}
