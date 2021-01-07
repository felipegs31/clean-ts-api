import dotenv from 'dotenv'
import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'
dotenv.config()

console.log('env.port', env.port)
console.log('env.mongoUrl', env.mongoUrl)

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
