import path from "path"
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })
import { Request, Response } from 'express'
import moment from "moment"

moment.locale('pt-BR')
moment().format("L")

export const createMessage = (req: Request, res: Response) => {

    try {
        const data = req.body
        if (!data) {
            return res.status(400).json({
                error: "invalid request"
            })
        }
        
    } catch (error) {

    }
}