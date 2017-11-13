import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import webApp from './app'
import { setupErrorHandling } from './errors'
// ---------- EXPRESS ----------

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..', '..', 'public')))

// ----------  ROUTES ----------
app.use('/', webApp())

// ---------- ERRORS ----------
setupErrorHandling(app)

export default app
