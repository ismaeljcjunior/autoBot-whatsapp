import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import path from "path"
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })
import Sender from '../services/services'

const sender = new Sender
const app: Express = express()
const port: number = Number(process.env.PORT)

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/send', async (req: express.Request, res: express.Response) => {
    const { number, message } = req.body

    try {
        await sender.sendText(number, message)

        return res.status(200).json()
    } catch (e) {
        console.log(e)
        res.status(500).json({ status: 'e', message: e })
    }
})
app.get('/status', (req: Request, res: Response) => {

})
app.get('/', (req: Request, res: Response) => {
    res.send('Server AutoBot-WhatsApp is running' + port)
})

export const appRoutes = app