import dotenv from 'dotenv'
dotenv.config()
import path from "path"
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })
import express from 'express'
import cors from 'cors'
import { appRoutes } from './routes/routes'

const app = express()
const port: number = Number(process.env.PORT)

app.use(express.json())
app.use(cors())
// loggerHTTP(app)
app.use('/', appRoutes)


app.listen(port, () => {
    console.log('Conversor de Requisição 1.0 is running on port', port)
})