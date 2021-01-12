import './dotEnvConfig'
import 'module-alias/register'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'

MongoHelper.connect(process.env.MONGO_URL)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(4001, () => console.log('Server running at http://localhost:4001'))
  })
  .catch(console.error)
