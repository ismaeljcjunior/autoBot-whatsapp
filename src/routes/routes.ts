import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import path from "path"
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })


const app: Express = express()
const port: number = Number(process.env.PORT)

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/status',(req: Request, res: Response) => {

})
app.get('/', (req: Request, res: Response) => {
    res.send('Server AutoBot-WhatsApp is running' + port)
})

export const appRoutes = app