import { Router } from 'express'

export default () => {
  const router = Router()
  router.get('/', (req, res) => {
    res.status(200).sendFile(`${__dirname}/app.html`)
  })
  return router
}
