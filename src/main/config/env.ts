export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://felipegs31:IcNMHhtFyKaVijlU@nodecourse.bvjjv.mongodb.net/manguinho?retryWrites=true&w=majority', // nao vou mudar pro container
  port: process.env.MONGO_URL || 5050,
  jwtSecret: process.env.JWT_SECRET || 'FA937A9iasud012'
}
