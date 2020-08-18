import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  console.log('pre route')
  fg.sync('**/src/main/routes/**routes.ts').forEach(async file => (await import(`../../../${file}`)).default(router))
}
